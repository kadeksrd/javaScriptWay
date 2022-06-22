var n = 5;
var s = '';
for(i=1;i<=n;i++){
    for (o=1;o<=(n-i);o++){
            s+=' ';
    }
    for (j=1;j<=i+(i-1);j++){
            s+='*';
    }
    s+='\n'
}
for (a=5;a>=1;a--){
    for (o=1;o<=(n-a);o++){
        s+=' ';
     }
for (j=1;j<=a+(a-1);j++){
        s+='*';
}
        s+='\n';
}
console.log(s)