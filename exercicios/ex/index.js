function funcX(n){
    if(n==0){
        return n
    }
    return (n-1)*funcX(n-1)

}


console.log(funcX(3))