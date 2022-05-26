
/**本地数据库管理，所有数据都要加上cache 字段，用来判断是否为脏数据 */
export default class DataManager {

    private static _inst: DataManager = null;

    private _dataBase: Map<number, any> = null;

    static get Inst() {
        if (DataManager._inst == null)
            DataManager._inst = new DataManager();
        return DataManager._inst;
    }

    SetData<T>(key: number, data: T) {
        this._dataBase.set(key, data);
    }

    GetData<T>(key: number) {
        if (!this._dataBase.has(key)) {
            throw Error(`${key} not exist in database, please confirm`);
        }
        return <T>this._dataBase.get(key);
    }

    HasData(key: number) {
        return this._dataBase.has(key) && this._dataBase.get(key) != undefined;
    }

    DeleteData(key: number) {
        this._dataBase.delete(key);
    }

    private constructor() {
        this._dataBase = new Map<number, object>();
    }
}