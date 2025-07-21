import type { Metadata } from 'next'
import Image from 'next/image'
import logoImage from './profile.jpg'
import type { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPerson,
  faCat,
  faDiamond,
  faBowlRice,
  faHouse,
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'プロフィール – みのじろー | 写真家・フォトグラファー',
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "みのじろー",
      "alternateName": "minoJiro",
      "jobTitle": "フォトグラファー",
      "description": "東京都在住のフォトグラファー。専門学校東京ビジュアルアーツ写真学科コマーシャルフォト専攻を卒業後、フリーランスとして活動中。",
      "url": "https://minojiro.com",
      "image": "https://minojiro.com/profile.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "東京都",
        "addressCountry": "JP"
      },
      "birthPlace": {
        "@type": "Place",
        "name": "愛知県"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "専門学校東京ビジュアルアーツ",
        "department": "写真学科コマーシャルフォト専攻"
      },
      "knowsAbout": [
        "人物撮影",
        "ペット撮影",
        "小物撮影",
        "食品撮影",
        "インテリア撮影",
        "ポートレート",
        "コマーシャルフォト"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "専門学校東京ビジュアルアーツ"
        }
      },
      "worksFor": [
        {
          "@type": "Organization",
          "name": "フリーランス"
        }
      ],
      "client": [
        {
          "@type": "Organization",
          "name": "協同出版株式会社"
        },
        {
          "@type": "Organization",
          "name": "東山遊園株式会社"
        },
        {
          "@type": "Organization",
          "name": "株式会社FLANDRE"
        },
        {
          "@type": "Organization",
          "name": "HATAKE AOYAMA"
        },
        {
          "@type": "Organization",
          "name": "相真工務店"
        }
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "フォトグラファー",
        "occupationLocation": {
          "@type": "City",
          "name": "東京"
        }
      },
      "makesOffer": {
        "@type": "Service",
        "serviceType": "写真撮影",
        "areaServed": "東京都",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "撮影サービス",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "人物撮影"
            },
            {
              "@type": "Service",
              "name": "ペット撮影"
            },
            {
              "@type": "Service",
              "name": "小物撮影"
            },
            {
              "@type": "Service",
              "name": "食品撮影"
            },
            {
              "@type": "Service",
              "name": "インテリア撮影"
            }
          ]
        }
      },
      "award": [
        "写真集「夏目あおいのなつやすみ」出版",
        "合同写真展「ポートレート専科」参加"
      ]
    }),
  },
}

const ProfileData = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <dl className="">
      <dt className="font-bold mb-4">{props.title}</dt>
      <dd>{props.children}</dd>
    </dl>
  )
}

export default async function Home() {
  return (
    <main className="flex gap-8 items-start flex-wrap max-w-3xl mx-auto">
      <div className="flex-[320px] flex-grow-1">
        <Image
          src={logoImage}
          alt=""
          width={320}
          height={320}
          className="w-full"
        />
      </div>
      <div className="flex-[999] min-w-[50%]">
        <h2 className="font-bold mb-5 text-lg">みのじろー（minoJiro）</h2>
        <div className="grid gap-5">
          <p>
            東京都在住のフォトグラファー。
            <br />
            専門学校東京ビジュアルアーツ写真学科コマーシャルフォト専攻を卒業後、フリーランスとして活動中。写真集「夏目あおいのなつやすみ」出版、合同写真展「ポートレート専科」参加。愛知県出身。
            <br />
            <br />
            クライアント：協同出版株式会社、東山遊園株式会社、株式会社
            FLANDRE、HATAKE AOYAMA、相真工務店、など
          </p>
          <ProfileData title="撮れるもの">
            <ul>
              {[
                { icon: faPerson, label: '人物' },
                { icon: faCat, label: 'ペット' },
                { icon: faDiamond, label: '小物' },
                { icon: faBowlRice, label: '食品' },
                { icon: faHouse, label: 'インテリア' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <p className="w-4 block">
                    <FontAwesomeIcon icon={item.icon} />
                  </p>
                  <p>{item.label}</p>
                </li>
              ))}
              <li>など</li>
            </ul>
          </ProfileData>
        </div>
      </div>
    </main>
  )
}
