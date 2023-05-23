
class Book {
    public title:string;
    public author:string;
    public pages:number =150;
    private _manufacturing_plant:string='공장';
    protected papaer_type:string = '밍크지';

    constructor(title:string, author:string, pages:number){
        this.title = title;
        this.author = author;
        this.page = pages;
    }

    public printPages(): string {
        return `${this.pages}페이지`;
    }

    protected changePaperType(type:string): void {
        this.paper_type = type;
    }
        privaate setManufacturingPlant(plant:string): void {
            this._manufacturing_plant = plant;
        }

}