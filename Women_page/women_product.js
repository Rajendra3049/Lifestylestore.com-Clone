//--------------------------------------------- experiment area---------------------------

let RJData = JSON.parse(localStorage.getItem("cart")) || [];
let cartLength = document.getElementById("cart_length");
cartLength.innerText = RJData.length;

//-------------------------- api temporary data----------------------------
// let dataArray=[
//     {
//       "id": 1,
//       "name": "AURELIA Women Striped Band Collar Straight Kurta",
//       "price": 499,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_05-2100.jpg"
//       ],
//       "Overview": "A perfect choice for everyday wear, this striped kurta features, three-quarter sleeves, a band collar, and a straight hemline."
//     },
//     {
//       "id": 2,
//       "name": "BIBA Women Foil Print Three-Quarter Sleeves Kurta",
//       "price": 849,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009552645-Red-Maroon-1000009552645_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009552645-Red-Maroon-1000009552645_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009552645-Red-Maroon-1000009552645_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009552645-Red-Maroon-1000009552645_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009552645-Red-Maroon-1000009552645_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009552645-Red-Maroon-1000009552645_06-2100.jpg"
//       ],
//       "Overview": "A perfect upgrade for an ethnic wardrobe, this kurta is designed with foil prints, notched round neckline and three-quarter sleeves."
//     },
//     {
//       "id": 3,
//       "name": "MELANGE Women Embroidered Straight Kurta",
//       "price": 909,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_06-2100.jpg"
//       ],
//       "Overview": "Highlighted with embroidered details, this straight kurta features a round neckline and three-quarter sleeves with scalloped trim."
//     },
//     {
//       "id": 4,
//       "name": "MELANGE Women Embroidered Round Neck A-line Kurta",
//       "price": 909,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_06-2100.jpg"
//       ],
//       "Overview": "Flaunt a look of elegance with this kurta that comes with a embroidered design, three-quarter sleeves and a round neck."
//     },
//     {
//       "id": 5,
//       "name": "MELANGE Women Abstract Print Straight Kurta",
//       "price": 719,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_06-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_07-2100.jpg"
//       ],
//       "Overview": "Revel in the absolute beauty of this A-line kurta, designed with fashionable features such as abstract print, V-neckline, 3/4th sleeves, and amped up appeal. Experience the premium wearability."
//     },
//     {
//       "id": 6,
//       "name": "MELANGE Women Embroidered Straight Kurta",
//       "price": 909,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_06-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_07-2100.jpg"
//       ],
//       "Overview": "Floral embroidery on this straight kurta brings an elegant update to your ethnic style. It is fashioned with a band collar, three-quarter sleeves, and a pocket."
//     },
//     {
//       "id": 7,
//       "name": "MELANGE Women Printed Three-Quarter Sleeves Straight Kurt",
//       "price": 999,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_06-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_07-2100.jpg"
//       ],
//       "Overview": "Keep your look simple yet stylish by wearing this graceful perky piece tailored in a printed design. It features three-quarter sleeves and a band collar adding panache to your look."
//     },
//     {
//       "id": 8,
//       "name": "MELANGE Women Embroidered Three-quarter Sleeves Straight Kurta",
//       "price": 559,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_07-2100.jpg"
//       ],
//       "Overview": "Pep up your ethnic ensemble with this straight kurta that's designed with embroidery, three-quarter sleeves, insert pockets, and a round neckline"
//     },
//     {
//       "id": 9,
//       "name": "MELANGE Women Printed Straight Kurt",
//       "price": 909,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_06-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010768221-Pink-Fuschia-1000010768221_07-2100.jpg"
//       ],
//       "Overview": "An ideal pick for this winter season this knit kurta is designed with a notched neckline, insert pockets, and full sleeves"
//     },
//     {
//       "id": 10,
//       "name": "MELANGE Women Printed V-Neck Straight Kurta",
//       "price": 699,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_06-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784670-White-OffWhite-1000010784670_07-2100.jpg"
//       ],
//       "Overview": "A stunning addition to your ethnic wardrobe, this printed kurta comes with a round neck, three-quarter sleeves, and straight hem."
//     },
//     {
//       "id": 11,
//       "name": "MELANGE Women Embroidered Straight Kurta",
//       "price": 909,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_06-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023638-Yellow-Yellow-1000011023638_07-2100.jpg"
//       ],
//       "Overview": "A perfect choice for everyday wear, this embroidered kurta features three-quarter sleeves, a notch neckline, and a straight hemline"
//     },
//     {
//       "id": 12,
//       "name": "MELANGE Women Printed Straight Kurta",
//       "price": 909,
//       "images": [
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784372-Red-Wine-1000010784372_01-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784372-Red-Wine-1000010784372_02-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784372-Red-Wine-1000010784372_03-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784372-Red-Wine-1000010784372_04-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784372-Red-Wine-1000010784372_05-2100.jpg",
//         "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784372-Red-Wine-1000010784372_06-2100.jpg"
//       ],
//       "Overview": "A stunning addition to your ethnic wardrobe, this kurta comes with a V-neck, three-quarter sleeves and straight hem."
//     }
//   ]
let dataArray;

const getData = async () => {
  console.log("in");
  let res = await fetch(`https://filthy-lime-glasses.cyclic.app/women`);
  let actual_data = await res.json();
  //   console.log("actual_data", actual_data);
  dataArray = actual_data;
  append_img(dataArray);
};
getData();

// ---------------import------------------------

// ------------------select div-----------------
let img_container = document.getElementById("main_container");

//----------------------------append function for main_container---------------------------

const append_img = (data) => {
  data.forEach(function (e) {
    let card = document.createElement("div");
    card.setAttribute("class", "card_div");

    // carousel start
    let slideshow_div = document.createElement("div");
    slideshow_div.setAttribute("class", "slideshow_div");

    slideshow_div.addEventListener("click", function () {
      detailsData(e);
    });
    const carousel = () => {
      let image = document.createElement("img");
      image.setAttribute("class", "carousel_img");
      image.src = e.images[0];
      slideshow_div.append(image);

      let i = 1;
      setInterval(function () {
        if (i == e.images.length) {
          i = 0;
        }
        image.src = e.images[i];

        slideshow_div.append(image);

        i++;
      }, 4000);
    };
    carousel();
    // carousel end

    let card_bottomdiv = document.createElement("div");
    card_bottomdiv.setAttribute("class", "card_bottombox");

    let price = document.createElement("p");
    price.innerText = `Rs. ${e.price}`;
    price.setAttribute("class", "price");

    let name = document.createElement("p");
    name.innerText = e.name;
    name.setAttribute("class", "name");

    let basket_btn = document.createElement("button");
    basket_btn.innerText = "Add To Basket";
    basket_btn.setAttribute("class", "basket_btn");

    basket_btn.addEventListener("click", function () {
      movetolocal(e);
    });

    card_bottomdiv.append(price, name);
    card.append(slideshow_div, card_bottomdiv, basket_btn);
    img_container.append(card);
  });
};

// -------------------Data store in local storage for cart-----------------------------
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function movetolocal(data) {
  console.log("In");
  cartData.push(data);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
}

//----------------------------------- Data store in local storage for details page----------------------------

function detailsData(clikcData) {
  console.log("in");
  localStorage.setItem("details_data", JSON.stringify(clikcData));
  window.location.href = "w_details.html";
}

// tial;
let count = 0;
let UserName = document.getElementById("username");
let login_btn = document.getElementById("login");
let logout_btn = document.getElementById("logout");

if (count == 0) {
  login_btn.innerHTML = "Sign Up / Sign In";
}

let user = JSON.parse(localStorage.getItem("User_info"));
if (user) {
  UserName.innerText = user;
  logout_btn.innerText = "Log Out";
  login.classList.add("login");
  count = 1;
  login_btn.innerText = null;
}

logout_btn.addEventListener("click", logout);
function logout() {
  UserName.classList.add("username");
  login.classList.remove("login");
  UserName.innerText = null;
  logout_btn.innerText = null;
  localStorage.removeItem("User_info");
  login_btn.innerHTML = "Sign Up / Sign In";
  count = 0;
}
