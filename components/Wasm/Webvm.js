import EditorTopbar from '../Editor/EditorTopbar';
import Script from 'next/script';
// import COIService from '../../public/coi-service.js';
import Head from 'next/head';

export default function Webvm(props) {
    return (
        <div className='webvm'>
            <Head>
        <script src='/coi-serviceworker.js' async></script>
            </Head>
            <EditorTopbar {...props} />
            <iframe src='../../webvm/index.html' width='100%' height='95%'></iframe>
        </div>
    )
}