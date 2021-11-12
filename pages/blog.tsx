import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogProps {
    dataBlog: Post[];
}

export default function Blog(props: BlogProps) {

    const { dataBlog } = props;

    return (
        <Layout pageTitle="Blog" >
            {dataBlog.map(blog => {
                return (
                    <div key={blog.id} className={styles.card}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )
            })};
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();

    return {
        props: {
            dataBlog,
        },
    };
}