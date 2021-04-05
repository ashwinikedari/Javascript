
function headnTail(){
    let H = 1100;
    let arr = Array.from(new Array(H), (v,i)=>"H");

    let T = 0;
    let n=2;
    while(n<=arr.length){

        for(let i=0;i<arr.length;i++){

            if((i+1)%n==0){
                if(arr[i] == 'H'){
                    arr[i] = 'T'
                    T++;
                    H--;
                }else{
                    arr[i] = 'H'
                    H++;
                    T--;
                }
            }
        }
        if(n==1100){
            console.log("H", H);
            console.log("T", T);    
        }
        n++;
    }
    return T;
}
console.log(headnTail());

function deckOfCards(){
    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < values.length; x++) {
            var card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }

	return deck;

}
console.log(deckOfCards());