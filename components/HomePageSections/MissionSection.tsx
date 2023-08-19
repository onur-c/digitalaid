import React from "react";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { RiHandHeartLine } from "react-icons/ri";
import SectionRevealer from "@/components/Animation/SectionRevealer";

// Eğitim Hizmeti Vermek. Danışmanlık
//             Hizmeti Vermek. Etkin Kalite Yönetiminin Sağlanması. Yazılım, Test
//             ve Ürün Desteği Sağlamak.
const MissionSection = () => {
  return (
    <SectionRevealer>
      <section className="mt-12">
        <div className="flex gap-5 justify-center items-center flex-wrap text-light">
          <div className="flex flex-col items-center gap-4 w-96 bg-gradient-to-br from-gray to-secondary/30 shadow-lg rounded-xl py-20 ">
            <div className="text-8xl ">
              <GoGoal />
            </div>
            <h3 className="text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              Misyon
            </h3>
            <p className="w-3/4 leading-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              Uzman danışmanlarımız ile müşterilerimizin süreçlerini sürekli
              ölçerek ve iyileştirerek çevik yönetilen bir şirket olmalarına
              yardımcı olmak. Bu kapsamda;{" "}
            </p>
            <ul className="list-disc list-inside leading-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              <li>
                <span className="font-bold">Eğitim</span> Hizmeti Vermek.
              </li>
              <li>
                <span className="font-bold">Danışmanlık</span> Hizmeti Vermek.
              </li>
              <li>
                Etkin{" "}
                <span className="font-bold">Kalite Yönetimi&apos;nin</span>{" "}
                Sağlanması.
              </li>
              <li>
                <span className="font-bold">Test ve Ürün desteği</span>{" "}
                Sağlamak.
              </li>
            </ul>
          </div>
          <div className=" flex flex-col items-center gap-4 w-96 bg-gradient-to-b from-gray to-secondary shadow-lg rounded-xl py-20">
            <div className="text-8xl ">
              <FaEye />
            </div>
            <h3 className="text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              Vizyon
            </h3>
            <p className="w-3/4 leading-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              Yeni nesil dijital işletmeye giden yolculuğu sağlamada lider
              olmak.
            </p>
            <ul className="list-disc list-inside  w-4/5 leading-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              <li>
                <span className="font-bold">Yenilikçi</span> yaklaşımlarla
                müşterilerimizin tercih ettiği firma olmak.
              </li>
              <li>
                <span className="font-bold">Dürüstlük ve güven</span>{" "}
                değerlerini temel ilkemiz olarak benimseyerek tüm müşterilerimiz
                için değer yaratan bir kuruluş olmak.
              </li>
              <li>
                <span className="font-bold">Güvenilir</span> ürünler üreterek
                müşterilerimizin süreçlerini hızlandıran ve işlerini
                kolaylaştıran vazgeçilmez bir çözüm ortağı olmak.
              </li>
              <li>
                <span className="font-bold">Çevreye duyarlı</span> teknoloji
                üretimini sürekli hale getirerek ülke kalkınmasına önemli
                katkılar sağlayan lider bir teknoloji şirketi olmak.
              </li>
            </ul>
          </div>
          <div className=" flex flex-col items-center gap-4 w-96 bg-gradient-to-bl from-gray to-secondary/30 shadow-lg rounded-xl py-20 ">
            <div className="text-8xl ">
              <RiHandHeartLine />
            </div>
            <h3 className="text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              Değerlerimiz
            </h3>
            <p className="w-3/4 leading-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              DigitalAid olarak;
            </p>{" "}
            <ul className="list-disc list-inside w-4/5 leading-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
              <li>
                <span className="font-bold">Etik</span> Değerlere bağlıyız.
              </li>
              <li>
                Yüksek <span className="font-bold">müşteri memnuniyeti</span>{" "}
                yaratıyoruz.
              </li>
              <li>
                <span className="font-bold">Mutlu</span> bir çalışanın mutlu bir
                müşteri sağlayacağına inanıyoruz.
              </li>
              <li>
                <span className="font-bold">Sürdürülebilirliğe</span> katkı
                sağlıyoruz.
              </li>
              <li>
                <span className="font-bold">İletişim ve geri bildirime</span>{" "}
                değer veriyoruz.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SectionRevealer>
  );
};

export default MissionSection;
