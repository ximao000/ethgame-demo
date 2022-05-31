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

    public static timeToString(timeSceond: number) {
        let h = Math.floor(timeSceond / 3600);
        let m = Math.floor(timeSceond % 3600 / 60);
        let s = timeSceond % 3600 % 60;
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }
}
