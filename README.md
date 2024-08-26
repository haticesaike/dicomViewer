# DICOM Viewer Project

Bu proje, tıbbi görüntüleme alanında kullanılan DICOM (Digital Imaging and Communications in Medicine) formatındaki görüntüleri web tarayıcısında görüntülemek için Cornerstone.js kütüphanesini kullanan bir web uygulamasıdır. Uygulama, kullanıcıların DICOM görüntülerini yüklemesine, görüntü üzerinde dikdörtgen ROI (Region of Interest) seçimi yapmasına ve bu seçimlerle ilgili bilgileri saklamasına olanak tanır.


## Özellikler

### 1. Anasayfa
- Hasta listesi görüntüleme 
- Hasta detaylarını gösterme (Expand/modal)
- Filtreleme(Search)
- DICOM Viewer'a yönlendirme

### 2. DICOM Viewer
- Cornerstone.js kullanarak DICOM görüntülerini görüntüleme
- Rectangular ROI (Region of Interest) tool'u ile seçim yapabilme
- Seçimleri sağ panelde listeleme ve yönetme

## Teknolojiler

- React
- TypeScript
- Vite
- Cornerstone.js
- React Router
- Mantine UI

### Navigasyon
React Router kullanılarak sayfa yönlendirmeleri yönetilmiştir.
Bu yapı, uygulamanın ölçeklenebilir ve bakımı kolay olmasını sağlar, aynı zamanda hızlı sayfa geçişleri ve etkili state yönetimi sunar.

### Screenshots

![App Screenshot](https://github.com/haticesaike/dicomViewer/blob/main/src/assets/chrome_wkOs4kTs2A.png?raw=true)

![App Screenshot](https://github.com/haticesaike/dicomViewer/blob/main/src/assets/chrome_SliLMiGmra.png?raw=true)



## Kurulum

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın:**

   ```bash
   git clone https://github.com/kullaniciadi/dicom-viewer.git
   cd dicom-viewer

2. **Bağımlılıkları Yükleyin:**

   ```bash
   npm install

3. **Uygulamayı Başlatın:**

      ```bash
      npm run dev

