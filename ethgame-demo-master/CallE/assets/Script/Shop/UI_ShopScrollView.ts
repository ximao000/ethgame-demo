import { IRobot, RobotTypeCount } from "../Model/RobotProp";
import ShopItem from "./ShopItem";



const { ccclass, property } = cc._decorator;
@ccclass
export default class UI_ShopScrollView extends cc.ScrollView {
    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;
    @property(cc.Layout)
    lytContent: cc.Layout = null;
    @property(cc.Node)
    maskNode: cc.Node = null;
    @property({ displayName: '每行个数' })
    colCount: number = 3;

    private _itemPools: ShopItem[] = [];
    private _cacheData: { idx: number, roomTypeData: IRobot, poolIdx: number, height: number }[] = [];

    private _inited = false;
    private _totalHeight = 0;
    private _itemCount = 0;

    onLoad() {
        // this.content.parent.parent.getComponent(cc.Widget).updateAlignment();
        this.content.parent.getComponent(cc.Widget).updateAlignment();
        this._InitPoolSize();
        this._itemPools = [];
        this.content.destroyAllChildren();

        let initItemGenerator = this._GetItemGenerator();
        let cb = () => {
            let it = initItemGenerator.next();
            if (it.done) {
                this.unschedule(cb);
            }
        };
        this.schedule(cb, 1 / cc.game.getFrameRate());
    }

    protected onEnable(): void {
        super.onEnable();
        let testData: IRobot[] = [];
        for (let index = 0; index < 20; index++) {
            let data: IRobot = {
                id: index,
                robotImgId: index % RobotTypeCount,
                mint: index,
                sol: index,
                level: index,
                robotType: index % RobotTypeCount,
                efficiency: Math.ceil(Math.random() * 10) / 10,
                luck: Math.ceil(Math.random() * 10) / 10,
                loss: Math.ceil(Math.random() * 10) / 10
            }
            testData.push(data)

        }
        this.SetData(testData);
    }

    SetData(gameTypeCreatDatas: IRobot[]) {

        this._cacheData = [];
        this._totalHeight = 0;

        //AppLog.Log('-- itemCount: ', this._itemCount);

        for (let i = 0, poolIdx = 0; i < gameTypeCreatDatas.length; ++i, ++poolIdx) {
            if (poolIdx >= this._itemCount) poolIdx = 0;
            let h = this.itemPrefab.data.height;
            this._cacheData.push({
                idx: i,
                roomTypeData: gameTypeCreatDatas[i],
                poolIdx: poolIdx,
                height: h,
            });
        }

        let col = Math.ceil(this._cacheData.length / this.colCount);
        let padding = this.lytContent.paddingTop + this.lytContent.paddingBottom;
        this._totalHeight = col * this.itemPrefab.data.height + (col - 1) * this.lytContent.spacingY + padding;
        this.content.height = this.elastic ? Math.max(this._totalHeight, this.content.parent.height) : this._totalHeight;

        if (this._inited) this.OnScrolling(this, null);
    }

    OnScrolling(event: cc.ScrollView, customEventData: string) {
        if (!this._inited) return;
        if (!this.itemPrefab.data) return;

        let offsetY = event.getScrollOffset().y;
        let res = this._CalculateStartAndEndIdx(offsetY);
        for (let i = res.startRow; i <= res.endRow; ++i) {
            for (let j = 0; j < this.colCount; ++j) {
                this._ProcessScrollViewItem(i * this.colCount + j);
            }
        }
    }

    private _CalculateStartAndEndIdx(offsetY: number): { startRow: number; endRow: number } {

        let itemHeight = this.itemPrefab.data.height + this.lytContent.spacingY;

        let startRow = Math.floor((offsetY + this.lytContent.paddingTop) / itemHeight);
        // if (startRow > 0) --startRow;

        let maxRow = Math.ceil(this._itemCount / this.colCount) - 1;
        let maxDataCount = Math.ceil(this._cacheData.length / this.colCount);

        let endRow = startRow + maxRow;
        if (endRow >= maxDataCount) {
            endRow = maxDataCount - 1;
        }
        return {
            startRow: startRow,
            endRow: endRow,
        };
    }

    private _ProcessScrollViewItem(idx: number) {
        let data = this._cacheData[idx];
        if (!data) return;
        let item = this._itemPools[data.poolIdx];
        if (!item || (item && item.renderIdx == idx)) return;
        item.node.name = idx.toString();
        item.SetItem(idx, data.roomTypeData);
        item.node.active = true;
        item.node.setPosition(this._CalculateItemPos(idx));
    }

    private _CalculateItemPos(idx) {
        let row = Math.floor(idx / this.colCount);
        let offsetY = row * (this.itemPrefab.data.height + this.lytContent.spacingY) + this.itemPrefab.data.height / 2;
        //posX
        let xStart = -this.lytContent.node.width / 2 + this.lytContent.paddingLeft;
        let col = idx - row * this.colCount;
        let x = xStart + col * (this.itemPrefab.data.width + this.lytContent.spacingX) + this.itemPrefab.data.width / 2;
        return cc.v2(x, -offsetY);
    }

    private *_GetItemGenerator() {
        for (let index = 0; index < this._itemCount; index++) {
            let node = cc.instantiate(this.itemPrefab);
            node.active = false;
            this.content.addChild(node);
            let comp = node.getComponent(ShopItem);
            this._itemPools.push(comp);
            yield;
        }
        this._inited = true;
        this.OnScrolling(this, null);
    }

    private _InitPoolSize() {
        let item_w = this.itemPrefab.data.width;
        let item_h = this.itemPrefab.data.height;
        let colCount = this.colCount;
        let rowCount = Math.abs(Math.ceil(this.content.parent.height / (item_h + this.lytContent.spacingY)));
        this._itemCount = colCount * (rowCount + 1);
    }
}
