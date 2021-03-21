parse(read());


function read(){
    var mydata = JSON.parse(JSON.stringify(data));
    return mydata;
}

function parse(mydata){
    for (var key in mydata.Live) {
        for (var key1 in mydata.Live[key]) {
            for (var key2 in mydata.Live[key][key1]) {
                for (var key3 in mydata.Live[key][key1][key2]) {
                    stavka=mydata.Live[key][key1][key2][key3].xstavka;
                    first_command = stavka.O1R;
                    second_command = stavka.O2R;
                    championship = stavka.LR;
                    first_coeff = stavka.Value1;
                    na_coeff = stavka.Value2;
                    second_coeff = stavka.Value3;
                    console.log("match");
                    console.log(first_command);
                    console.log(second_command);
                    console.log(championship);
                    console.log(first_coeff);
                    console.log(na_coeff);
                    console.log(second_coeff);
                }
            }
        }
        
    }
    
}