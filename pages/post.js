import Layout from '../components/layout';
import { withRouter } from 'next/router';

 const Post = ({ router }) => (
    <Layout title={ router.query.title }>
    <p style={{ width: "80vw" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit repudiandae sapiente expedita amet unde quidem, error asperiores vitae enim nisi, saepe labore nemo doloremque dolore pariatur impedit, esse itaque.</p>
    
    </Layout>
)

// to get router prop 
export default withRouter(Post);