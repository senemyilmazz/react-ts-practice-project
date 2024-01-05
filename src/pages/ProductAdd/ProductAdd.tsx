import { Form, Formik,} from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { passwordRule } from '../../utils/validation/customValidationRules';
import { FormikInput } from '../../components/FormikInput/FormikInput';
import { FormikSelectBox } from '../../components/FormikSelectBox/FormikSelectBox';

type Props = {}

interface ProductAddForm {
    title: string;
    description: string,
    price : number,
    stock : number,
    colorId: number,
}

const ProductAdd = (props: Props) => {
    
    const initialValues = {
        title : "",
        description : "",
        price : 0,
        stock : 0,
        colorId : 0,
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Başlık alanı zorunludur").min(2, "Başlık en az 2 haneden oluşmalıdır.").max(50)
        .test("is-strong",
                "En az 1 büyük 1 küçük harf olmalı ve 1 rakam bulunmalı.", 
                passwordRule,
        ),
        description: Yup.string().min(2).max(150),
        price: Yup.number().min(0),
        stock: Yup.number().min(0).integer(),
        colorId: Yup.number().min(1, "Bir renk seçmelisiniz."),
    });

    const colorChoises :String[] = ["Bir seçim yapınız", "Kırmızı", "Beyaz", "Siyah"];

    return (
        <div className='container mt-5'>
            <Formik
                validationSchema={validationSchema} 
                initialValues={initialValues} 
                onSubmit={(values):any => {console.log(values)}}>
                <Form>
                    <FormikInput name="title" label="Ürün Adı" />
                    <FormikInput name="description" label="Ürün Açıklaması" />
                    <FormikInput name="price" label="Ürün Fiyatı" type="number" />
                    <FormikInput name="stock" label="Ürün Stok" type="number" />
                    <FormikSelectBox label="Ürün Rengi" choises={colorChoises} />
                    <button type="submit" className="btn btn-primary">Kaydet</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ProductAdd;