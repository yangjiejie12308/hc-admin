export class Customer {
    id: string;
    name: string;
    type: number;
    typeName: string;
    address: string;
    zipCode: string;
    tel: string;
    remark: string;
    isDeleted: boolean;
    creationTime: Date;
    creatorUserId: number;
    lastModificationTime: Date;
    lastModifierUserId: number;
    deletionTime: Date;
    deleterUserId: number;
    constructor(data?: ICustomer) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.type = data["type"];
            this.typeName = data["typeName"];
            this.address = data["address"];
            this.zipCode = data["zipCode"];
            this.tel = data["tel"];
            this.remark = data["remark"];
            this.isDeleted = data["isDeleted"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
            this.lastModificationTime = data["lastModificationTime"];
            this.lastModifierUserId = data["lastModifierUserId"];
            this.deletionTime = data["deletionTime"];
            this.deleterUserId = data["deleterUserId"];

        }
    }
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["type"] = this.type;
        data["address"] = this.address;
        data["zipCode"] = this.zipCode;
        data["tel"] = this.tel;
        data["remark"] = this.remark;
        data["isDeleted"] = this.isDeleted;
        data["creationTime"] = this.creationTime;
        data["creatorUserId"] = this.creatorUserId;
        data["lastModificationTime"] = this.lastModificationTime;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["deletionTime"] = this.deletionTime;
        data["deleterUserId"] = this.deleterUserId;
        return data;
    }
    static fromJS(data: any): Customer {
        let result = new Customer();
        result.init(data);
        return result;
    }
    static fromJSArray(dataArray: any[]): Customer[] {
        let array = [];
        dataArray.forEach(result => {
            let item = new Customer();
            item.init(result);
            array.push(item);
        });
        return array;
    }
    clone() {
        const json = this.toJSON();
        let result = new Customer();
        result.init(json);
        return result;
    }

}

export interface ICustomer {
    id: string;
    name: string;
    type: number;
    address: string;
    zipCode: string;
    tel: string;
    remark: string;
    isDeleted: boolean;
    creationTime: Date;
    creatorUserId: number;
    lastModificationTime: Date;
    lastModifierUserId: number;
    deletionTime: Date;
    deleterUserId: number;
}
