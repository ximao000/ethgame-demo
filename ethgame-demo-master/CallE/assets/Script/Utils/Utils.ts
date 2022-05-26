export default class Utils {
    /**存档数据 */
    public static SaveData(key: string, data: any): void {
        cc.sys.localStorage.setItem(key, data);
    }

    /**读取数据,没有该数据时回传null */
    public static LoadData(key: string): any {
        let data = cc.sys.localStorage.getItem(key);
        return data == "" ? null : data;
    }

    /**删除数据 */
    public static RemoveSaveData(key: string) {
        cc.sys.localStorage.removeItem(key);
    }
}
