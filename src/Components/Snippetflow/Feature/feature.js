import Img1 from "../Images/imageOne.jpg";
import Img2 from "../Images/imageTwo.jpg";
import Img3 from "../Images/imageThree.jpg";
// import Img4 from "../Images/imageFour.jpg";

console.log(Img1, "wow");
let featureData = [
    {
        title: "Product is ready",
        description: "This piece of software is very powerfull and important for evryone. So everyone should atleast have one of these softwares installed at their homes for them and their family , very powerfull and important for evryone.",
        buttonDetails: {isButton: true, buttonText: "start free trial", buttonLink: "some valid link" },
        imgDetails: {src: Img1, alt: "Img1", isImg: true}, // Import all the images used in the main section here.
    },

    {
        title: "This is a heading",
        description: "This piece of software is very powerfull and important for evryone. So everyone should atleast have one of these softwares installed at their homes for them and their family , very powerfull and important for evryone.",
        buttonDetails: {isButton: true, buttonText: "start free trial", buttonLink: "some valid link"},
        imgDetails: {src: Img2, alt: "Img2", isImg: true},
    },

    {
        title: "This is a heading",
        description: "This piece of software is very powerfull and important for evryone. So everyone should atleast have one of these softwares installed at their homes for them and their family , very powerfull and important for evryone.",
        buttonDetails: {isButton: true, buttonText: "start free trial", buttonLink: "some valid link"},
        imgDetails: {src: Img3, alt: "Img3", isImg: true},
    }
    
]



export {featureData} ;



