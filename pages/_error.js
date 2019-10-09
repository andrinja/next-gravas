import Layout from '../components/layout';

export default ({ statusCode }) => (
    <Layout title="Errorr!!">
        { statusCode ? `Could not load your user data: Status Code ${statusCode}
        `: 'Couldn"t get that page, sorry!'}
    </Layout>
)