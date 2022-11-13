function kid(){
    let ri=document.getElementById('rice').value;
    let st=document.getElementById('strice').value;
    let fe=document.getElementById('frideegg').value;
    let oe=document.getElementById('egg').value;
    let fr=document.getElementById('firerice').value;
    let so=document.getElementById('somtam').value;
    let pk=document.getElementById('graproa').value;
    let pp=document.getElementById('padpak').value;
    let nuri=Number(ri)
    let nust=Number(st)
    let nufe=Number(fe)
    let nuoe=Number(oe)
    let nufr=Number(fr)
    let nuso=Number(so)
    let nupk=Number(pk)
    let nupp=Number(pp)
    let k=nuri*10
    let sk=nust*10
    let ef=nufe*15
    let eo=nuoe*15
    let rf=nufr*35
    let os=nuso*35
    let kp=nupk*35
    let np=nupp*35
    let pl=Number(k)
    let plt=Number(sk)
    let plr=Number(ef)
    let plf=Number(eo)
    let pli=Number(rf)
    let plj=Number(os)
    let plk=Number(kp)
    let pll=Number(np)
    let plus=(pl+plt+plr+plf+pli+plj+plk+pll)
    document.getElementById('ruam').value=(plus);
}function torn(){
    let oo = document.getElementById('ruam').value;
    let rub = prompt("กรุณากรอกเงินที่ลูกค้า")
    let numoo = Number(oo)
    let numrub = Number(rub)
    let torn=numrub-numoo
    let pas=document.getElementById('pasbil').value;
    alert(torn)
    let num=Number(pas)
    let plu=(num+1)
    document.getElementById('pasbil').value=(plu);
}function pe(){
    let pr=prompt("กรุณากรอกรหัสลิ้นชัก")
    if(pr=="331040"){
        confirm("รหัสลิ้นชักถูกต้อง")
        confirm('!คำเตือนกรุณารีบปิดลิ้นชัก!')
    }

}