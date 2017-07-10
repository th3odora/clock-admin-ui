export class ClockOperation {
   
    startDate: Date;
    description: string;
    suspensionsEnabled: boolean;
    businessKey: string;
    endDate: Date;
    targetDuration: number;
    legalDuration: number;

    constructor(startDate: Date, description: string, suspensionsEnabled: boolean, businessKey: string, endDate: Date,targetDuration: number, legalDuration: number ){
        this.startDate = startDate;
        this.description = description;
        this.suspensionsEnabled = suspensionsEnabled;
        this.businessKey = businessKey;
        this.endDate = endDate;
        this.legalDuration = legalDuration;
        this.targetDuration = targetDuration;
    }  

}