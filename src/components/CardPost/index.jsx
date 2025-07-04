import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from "./cardpost.module.css"
import Link from "next/link"
import { incrementThumbsUp } from "@/actions"
import { ThumbsUpButton } from "./ThumbsUpButton"

export const CardPost = ({ post, highlight }) => {

    const submitThumbsUp = incrementThumbsUp.bind(null, post);

    return (
            <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
                <header className={styles.header}>
                    <figure style={{ height: highlight ? 300 : 133 }}>
                        <Image
                            src={post.cover}
                            alt={`Capa do post de titulo: ${post.title}`}
                            fill
                        />
                    </figure>
                </header>

                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
                </section>

                <footer className={styles.footer}>
                    <div>
                        <form action={submitThumbsUp}>
                            <ThumbsUpButton />
                        </form>
                        <p>
                            {post.likes}
                        </p>
                    </div>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
    )
}