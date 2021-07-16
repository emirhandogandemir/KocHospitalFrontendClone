import React from "react";
import Card from "../card/Card";
import "./homepage.scss";
export default function HomePage() {
  let image1 = "../../../assets/images/doctor.jpg";
  let content =
    "Çocuk kliniğimiz, 16 yatak kapasiteli çocuk ve 15 yatak kapasiteli yenidoğan yoğun bakım ünitesi, tek kişilik 24 odaya sahip çocuk servisi ve 32 hastaya aynı anda hizmet verebilen polikliniğinde 13 pediatri uzmanımız ve 70 hemşiremizle hizmet veriyor.";
  let image2 = "../../../assets/images/vacination.jpg";
  let content2 =
    "Hastanemizde Kapsamlı Kanser Programı, tıbbi onkoloji, radyasyon onkolojisi, genel cerrahi, patoloji, radyoloji ve tıptaki diğer  uzmanlık alanlarındaki hekimlerden ve tedavi sürecinde hekimlere destek veren psikolog, diyetisyen, hemşire, fizyoterapist gibi diğer uzmanlardan oluşmaktadır.";
  let image3 = "../../../assets/images/hospital.jpg";
  let content3 = "Aman diyim sen ne biçim insansın hadi buyronnnn";
  return (
    <div style={{ height: "800px", backgroundColor: "gray" }}>
      <div className="card-flex">
        <Card img={image1} content={content}></Card>
        <Card img={image2} content={content2}></Card>
        <Card img={image3} content={content3}></Card>
        <Card img={image3} content={content3}></Card>
      </div>
    </div>
  );
}
