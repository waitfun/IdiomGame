class SceneBegin extends eui.Component {
    private static shared: SceneBegin;
    public static Shared() {
        if(SceneBegin.shared == null) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    }
    private btn_begin:eui.Button = new eui.Button() ;
    public constructor() {
          super();
          
          this.skinName = "resource/skin/SceneBeginSkin.exml";
          this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_begin,this);
          this.addChild(this.btn_begin)
    }
     
    private onclick_begin(){
        console.log("game begin!");
        this.addChild(this.btn_begin)
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    }
}