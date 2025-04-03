"use client"
import Head from 'next/head';
import InstagramGallery from "../../components/InstagramGallery/InstagramGallery";

export default function SocialMedia() {
  return (
    <>
      <Head>
        <title>Social Media | Jayesh Photography</title>
        <meta name="description" content="Check out our latest Instagram posts" />
      </Head>
      
      <main>
        <InstagramGallery />
      </main>
    </>
  );
}