import {imageProps} from "./image";


describe('image', () => {

    beforeAll(() => {
        process.env.NEXT_PUBLIC_MEDIA_URL = 'https://strapi.com/'
    });

    it('imageProps', () => {
        const strapiImage = (url: string) => ({
            attributes: {url, alternativeText: 'alt'}
        });
        const img = (src: string) => ({src, alt: 'alt'});

        expect(imageProps({
            data: strapiImage('https://image.com/image.jpg')
        })).toMatchObject(img('https://image.com/image.jpg'));
        expect(imageProps(strapiImage('/image.jpg'))).toMatchObject(img('https://strapi.com/image.jpg'));
        expect(imageProps(strapiImage('/image.jpg'))).toMatchObject(img('https://strapi.com/image.jpg'));
    })
})
