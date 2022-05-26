import {IRobot, RobotTypeCount} from "../Model/RobotProp";

export interface IEnergy {
    idx: number,
    energyType: EnergyType,
    energyTime: number,
    energyCount: number,
    isGrow: boolean,
    canSteal: boolean,
}

export const EnergyShowCount = 5;
export const MaturationTime: number = 5*60*1000;
export const CollectionTime: number = 30*60*1000;

// 4
export const EnergyTypeCount = 4;
export enum EnergyType {
    TYPE_1,
    TYPE_2,
    TYPE_3,
    TYPE_4,
}

export function MakeNewEnergy(idx: number, type: EnergyType, time?: number, count?: number, grow?: boolean, steal?: boolean): IEnergy {
    return {
        idx: idx,
        energyType: type,
        energyTime: time? time : new Date().getTime(),
        energyCount: count? count : 0,
        isGrow: grow? grow : true,
        canSteal: steal,
    };
}

export function DefaultEnergyInfo(): IEnergy[] {
    let data: IEnergy[] = [];

    for (let index = 0; index < 3; index++) {
        let energy: IEnergy = {
            idx: index,
            energyType: 0,
            energyTime: new Date().getTime() - index*1000*300,
            energyCount: Math.ceil(Math.random() * 1000),
            isGrow: false,
            canSteal: true,
        };
        data.push(energy);

    }
    return data;
}