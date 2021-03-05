function countLines(text?: (string | null)[]): number {
    let count: number = 0;
    if(text){
    for(const line of text){
        if(line && line.length !== 0){
            count = count + 1 ;
        }
    }
    return count;
    }
}

let a = countLines(["One", "Two", "", "three"])
let b = countLines(["hello", null, "world"])
let c = countLines();

