class LevelIcon extends eui.Button{
    private lb_level:eui.Label= new eui.Label();
    public constructor() {
          super();
          this.skinName = "resource/skin/LevelIconSkin.exml";
    }
    public get Level():number{
        return parseInt(this.lb_level.text);
    }
    public set Level(value:number){
        this.lb_level.text = value.toString();
    }
}