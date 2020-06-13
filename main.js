/**
 * 8クイーンのチェス盤作成
 * @param {Number} N チェス盤の大きさ
 * @return {String} 合致したクイーンを配置したチェス盤
 */
var qeen = function(N) {
    var flag = false;
    while(!flag){
        // チェス盤を初期化
        var chess = [];
        for(i = 0; i < N; i++){
            chess.push(new Array(N).fill("-"));
        }
        
        // 8クイーン配置のX,Y座標をランダム生成
        var x = position(N);
        var y = position(N);
        
        // 8クイーン配置のY座標をランダム生成
        while(y.length!=8){
            var min = 0 ;
            var max = N-1 ;
            var point = Math.floor( Math.random() * (max + 1 - min) ) + min ;

            // Y座標が重複していなければ座標として決定する
            if(y.indexOf(point)==-1){
                y.push(point);
            }
        }

        var flag=true;

        for(i=0;i<x.length;i++){
            // クイーン配置位置に対角するクイーンが存在しなければ配置
            if(chess[x[i]][y[i]]!="x"){
                chess[x[i]][y[i]] = "Q";

                // クイーンに対して斜めに位置する部分にxを格納
                for(j=1;j<N-1;j++){
                    if(x[i]-j>=0 && y[i]-j>=0)chess[x[i]-j][y[i]-j] = "x";
                    if(x[i]-j>=0 && y[i]+j<=N-1)chess[x[i]-j][y[i]+j] = "x";
                    if(x[i]+j<=N-1 && y[i]-j>=0)chess[x[i]+j][y[i]-j] = "x";
                    if(x[i]+j<=N-1 && y[i]+j<=N-1)chess[x[i]+j][y[i]+j] = "x";
                }

            // クイーン配置位置に対角するクイーンが存在した場合、チェス盤の初期化からやり直し
            }else{
                flag=false;
                break;
            }
        }
    }

    chess = chess.join("\n").replace(/,/g," ");
    return chess.replace(/x/g,"-");

    // 確認用（x残し）
    // return chess;
};

/**
 * 座標位置の作成
 * @param {Number} N チェス盤の大きさ
 * @return {Array} 8つの座標位置
 */
function position(N){
    let array = [];
    while(array.length!=8){
        var min = 0 ;
        var max = N-1 ;
        var point = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        
        // 座標が重複していなければ座標として決定する
        if(array.indexOf(point)==-1){
            array.push(point);
        }
    }
    return array;
}

console.log(qeen(8))