"use client";
import SectionRevealer from "@/components/Animation/SectionRevealer";
import Image from "next/image";
import React from "react";
import Paperwork from "@/public/paperwork.webp";

const YazilimPageContent = () => {
  return (
    <SectionRevealer>
      <Image src={Paperwork} alt="Paperwork" className="m-auto" />
      <div className="flex items-center justify-center">
        <hr className="inline-block w-1/12" />
        <h3 className="text-center text-xl font-bold">PaperWork BPM & ECM</h3>
      </div>
      <h4 className="text-center italic mb-4">
        &quot;Dijital dönüşümde kontrolü ele alın ve değer sunun&quot;
      </h4>
      <div className="w-3/4 m-auto">
        <p className="p-4 leading-5">
          -Yapay Zeka Destekli Düşük Kodlu Dijital Süreç Platformu süreçlerinizi
          ve belgelerinizi yöneterek şirketinizin dijital dönüşüm hedeflerine
          ulaşmanıza yardımcı olacak tek, akıllı süreç otomasyon platformu.
          <br />
          -PaperWork BPM özellikleri size tüm iş süreçleri ve görevlerinde
          görünürlük sağlayacaktır. Gerçek zamanlı öngörüler elde etmek için
          gelişmiş analitik ve raporlama ile süreç performansını izleyebilir ve
          kontrol edebilirsiniz.
        </p>
        <ul className="list-disc list-inside space-y-5">
          <li>
            <span className="font-bold">Akıllı Elektronik Formlar</span>;
            Verileri yakalamak ve işlemek için herhangi bir akıllı cihazda
            çalışan çok dilli duyarlı elektronik formlar. Kağıt formlarınızı ve
            Excel dosyalarınızı iş akışı uygulamalarına dönüştürün.
          </li>
          <li>
            <span className="font-bold">Gelişmiş İş Akışı</span>; Süreç
            sahiplerine BT ekiplerini dahil etmeden iş akışlarının kontrolünü
            vererek ve darboğazları ortadan kaldırırken görünürlüğü ve izlemeyi
            iyileştirerek güçlendirin.
          </li>
          <li>
            <span className="font-bold">Doküman yönetimi</span>; Kuruluşunuz
            genelinde belgeleri yakalamak, yönetmek, paylaşmak ve arşivlemek
            için yapay zeka destekli, sağlam, ölçeklenebilir, güvenli ve yüksek
            performanslı içerik deposu.
          </li>
          <li>
            <span className="font-bold">Raporlama ve Analitik</span>; Karar
            verme sürecini hızlandırın ve işletme yöneticilerinin işleri
            hakkında bilgiye dayalı kararlar almalarına yardımcı olun.
          </li>
          <li>
            <span className="font-bold">SAP Hizmetleri</span>; Kullanıma hazır
            PaperWork BPM SAP konnektörlerini kullanarak SAP süreçlerini
            genişletin ve iyileştirin, geliştirme ve işletim maliyetlerini
            azaltın.
          </li>
          <li>
            <span className="font-bold">Düşük Kod Geliştirme</span>; Gelişen iş
            ihtiyaçlarını teknolojinin hızında benimseyin, daha kısa sürede daha
            fazla süreç ve uygulama geliştirin ve rekabette öne çıkın.
          </li>
        </ul>
      </div>
    </SectionRevealer>
  );
};

export default YazilimPageContent;
