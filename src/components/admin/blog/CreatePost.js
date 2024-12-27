import React, { useState } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import {Formik} from "formik";
import callToAPI from "../../../api";
import 'froala-editor/js/plugins.pkgd.min.js';
import slugify from 'react-slugify';
const CreatePost = () => {
    const [imageBlob, setImageBlob] = useState({})

    const onChangeMainImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImageBlob({url: e.target.result, data: file})
        };

        reader.readAsDataURL(file);
    };
    const [uploadedImages, setUploadedImages] = useState([]);

    const initialData = {
        title: '',
    }

    const [content, setContent] = useState('');

    const handleModelChange = (model) => {
        setContent(model);
    };
    console.log(imageBlob)
    const handleSubmit = async (values) => {
        await callToAPI('/admin/blog/post/create', 'post', {
            title: values.title,
            content: content,
            slug: slugify(values.title),
            shortDesc: 'Testowe',
            mainImage: imageBlob
        })
    }

    const handleImageRemoved = async (file) => {
        setUploadedImages(async (prevUploadedImages) => {
            const imageKey = prevUploadedImages.find((img) => img.link === file[0].src)?.key;

            if (!imageKey) {
                return prevUploadedImages;
            }

            try {
                await callToAPI('/admin/delete-image', 'DELETE', {
                    key: imageKey,
                });
                return prevUploadedImages.filter((img) => img.key !== imageKey);
            } catch (err) {
                console.error('Błąd podczas usuwania zdjęcia:', err);
                return prevUploadedImages;
            }
        });
    };
    console.log(imageBlob)
    return (
        <Formik initialValues={initialData} onSubmit={handleSubmit}>
            {({values, handleSubmit, handleChange, handleBlur, setFieldValue}) => (
                <form onSubmit={handleSubmit}>
                    <input name={'title'} value={values.title} onChange={handleChange} onBlur={handleBlur}/>
                    <p>
                        {slugify(values.title)}
                    </p>
                    <input type={'file'} onChange={onChangeMainImage}/>
                    <img src={imageBlob.url} />
                    <FroalaEditorComponent
                        tag="textarea"
                        model={content}
                        onModelChange={handleModelChange}
                        config={{
                            placeholderText: 'Wpisz coś...',
                            charCounterCount: true,
                            imageUpload: true,
                            imageUploadURL: 'http://localhost:8080/admin/upload-image',
                            imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
                            events: {
                                'image.uploaded': function (response) {
                                    const imageDetails = JSON.parse(response);
                                    console.log(imageDetails)
                                    setUploadedImages((prev) => [...prev, imageDetails]);
                                    console.log([imageDetails])
                                },
                                'image.error': function (error) {
                                    console.error('Error during image upload:', error);
                                },
                                'image.removed': (image) => handleImageRemoved(image),
                            },
                        }}
                    />
                    <div>
                        <h3>Podgląd HTML:</h3>
                        <textarea value={content} readOnly style={{width: '100%', height: '200px'}}/>
                    </div>
                    <button type={'submit'}>
                        Stwórz
                    </button>
                    <div dangerouslySetInnerHTML={{
                        __html: `<p><img src="https://halluxs3.s3.amazonaws.com/images/1734899491791_PODIATRICA-1024x465.png" style="width: 369px;" class="fr-fic fr-dib fr-fil" key="images/1734899491791_PODIATRICA-1024x465.png"></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><b style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent;"><span style='font-family: "Times New Roman", Times, serif, -webkit-standard;'><strong>Lato, jesień, zima, wiosna &ndash; nieważne! Z nadmierną potliwością st&oacute;p wiele os&oacute;b boryka się bez względu na temperaturę na zewnątrz. W stopach znajduje się aż 0,5 milion&oacute;w gruczoł&oacute;w potowych. A pot to często nieprzyjemny zapach. Jak poradzić sobie z nadmierną potliwością st&oacute;p i zadbać o dobrą kondycję sk&oacute;ry?</strong></span></b></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>Dlaczego się pocimy? To fizjologiczny spos&oacute;b naszego organizmu na zbicie zbyt wysokiej temperatury i ochłodzenie. Odpowiedzialne są za to gruczoły potowe rozmieszczone w całym naszym ciele. Większość z nich znajduje się w okolicach pach, dłoni, st&oacute;p, twarzy oraz klatki piersiowej. Za zapach potu odpowiadają za to bakterie obecne na naszej sk&oacute;rze. Pocenie to proces naturalny, ale w nadmiarze może świadczyć o złej kondycji naszego zdrowia.&nbsp;</span></p><p><span style="font-size: 30px;"><strong>Jakie są przyczyny nadpotliwości st&oacute;p? </strong></span></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>Wiele z przyczyn ma powiązanie z warunkami, w kt&oacute;rych się znajdujemy. Zbyt wysoka temperatura, źle dobrane ubranie, ekspozycja na promienie słoneczne i intensywny wysiłek pobudzają nasze gruczoły potowe. Ich zadanie, to ochłodzić organizm. Niepokojąca jest natomiast sytuacja, w kt&oacute;rej potliwość jest nadmierna i wywołana np. gorączką, cukrzycą, zaburzeniami hormonalnymi, otyłością, czy chorobami metabolicznymi. Wtedy warto zaopiekować się swoim zdrowiem i przejść kompleksowe badania.</span></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>Stopy w normalnych warunkach nie powinny wydzielać nadmiernej ilości potu. Duża aktywność gruczoł&oacute;w w tej okolicy może być efektem np. stresu lub źle dobranego do temperatury obuwia. Nie pomaga r&oacute;wnież dieta bogata w pikantne przyprawy, alkohol oraz mocna kawa. Ogromne znaczenie ma także utrzymywanie odpowiedniego poziomu higieny, co pozwoli w dodatku uniknąć np. <a href="https://podiatrica.pl/grzybica-stop-objawy-rodzaje-i-przyczyny-jak-skutecznie-leczyc-grzybice-stop/" style="box-sizing: border-box; text-decoration: none; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; color: rgb(2, 171, 210);">grzybicy st&oacute;p</a>.</span></p><h1 style="box-sizing: border-box; margin: 0px; padding: 0px 0px 10px; border: 0px; outline: 0px; font-size: 30px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); line-height: 1.1em; font-weight: 500; font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><b style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 30px; text-size-adjust: 100%; vertical-align: baseline; background: transparent;"><span style="font-family: Times New Roman,Times,serif,-webkit-standard;"><strong>Domowe sposoby na nadmierną potliwość st&oacute;p&nbsp;</strong></span></b></h1><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>&nbsp;Nadmiernej potliwości często się wstydzimy. Co możemy więc zrobić w domu, by wyhamować ilość wytwarzanego potu? Jest kilka prostych receptur, po kt&oacute;re warto sięgnąć.&nbsp;</span></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><b style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent;"><span style="font-family: Times New Roman,Times,serif,-webkit-standard;"><strong>Kąpiel w soli morskiej lub soli kuchennej</strong>&nbsp;</span></b><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>&ndash; przygotować roztw&oacute;r z 2 łyżeczek na około 2 litry wody, stopy należy namoczyć i pozostawić do samoistnego wyschnięcia.&nbsp;</span></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="font-family: Times New Roman,Times,serif,-webkit-standard;"><b style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent;">Namaczanie st&oacute;p w szałwi lub herbacie&nbsp;</b></span><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>&ndash; szałwia i czarna herbata mają silne właściwości ściągające, kt&oacute;re zabijają bakterie i pomagają zamykać pory, redukując nadmierne pocenie się. Dodatkowo szałwia to r&oacute;wnież spora dawka witaminy B i magnezu. W obu przypadkach wystarczy przygotować napar do namaczania st&oacute;p.&nbsp;</span></p><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><b style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent;"><span style="font-family: Times New Roman,Times,serif,-webkit-standard;"><strong>Roztw&oacute;r przeciwbakteryjny i przeciwgrzybiczy z sody oczyszczonej i cytryny</strong></span></b><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>&nbsp;&ndash; r&oacute;wnież służy do namaczania st&oacute;p. Soda świetnie eliminuje nieprzyjemny zapach, zmiękcza nask&oacute;rek i działa oczyszczająco. Dodatek soku z cytryny doda całości działanie ściągające.</span></p><h1 style="box-sizing: border-box; margin: 0px; padding: 0px 0px 10px; border: 0px; outline: 0px; font-size: 30px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); line-height: 1.1em; font-weight: 500; font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" id="isPasted"><b style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 30px; text-size-adjust: 100%; vertical-align: baseline; background: transparent;"><span style="font-family: Times New Roman,Times,serif,-webkit-standard;"><strong>Preparaty na nadmierną potliwość st&oacute;p&nbsp;</strong></span></b></h1><p style="box-sizing: border-box; margin: 0px; padding: 0px 0px 1em; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: rgb(255, 255, 255); color: rgb(35, 35, 35); font-family: Oxygen, Helvetica, Arial, Lucida, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 500; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style='box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 400; font-family: "Times New Roman", Times, serif, -webkit-standard;'>W drogeriach osoby borykające się z nadmierną potliwością st&oacute;p znajdą pełną gamę preparat&oacute;w. Wśr&oacute;d nich dominują specjalne antyperspiranty. To tak zwane <strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; text-size-adjust: 100%; vertical-align: baseline; background: transparent; font-weight: 700;">blokery potu</strong>. W składzie mają związki gilnu, kt&oacute;re mocno oddziałują na gruczoły potowe. Preparat nakłada się na suchą sk&oacute;rę 2-3 razy w tygodniu. </span></p>`
                    }}></div>
                </form>
            )}
        </Formik>
    );
};

export default CreatePost;
