import { Header } from '../../components/Header';
import React from 'react';
import Lottie from 'react-lottie';
import * as S from './styles';
import animationData from '../../../public/mailAnimation.json';
import { SiLinkedin, SiGmail, SiWhatsapp, SiInstagram } from 'react-icons/si';
import Head from 'next/head';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

export default function Contacts() {
    return (
        <S.Container>

            <Head>
                <title>{`rubskishimoto |  Contato `}</title>
            </Head>

            <Header />

            <S.Content>

                <S.Image>
                    <Lottie options={defaultOptions} />
                </S.Image>

                <S.VerticalLine />

                <S.Contact>
                    <S.ContactItem>
                        <SiGmail size={32} />
                        <a href="mailto:rubenskishimoto@gmail.com">rubenskishimoto@gmail.com</a>
                    </S.ContactItem>
                    <S.ContactItem>
                        <SiLinkedin size={32} />
                        <a href="https://www.linkedin.com/in/rubens-kishimoto/" target="_blank" rel="noreferrer">in/rubens-kishimoto</a>
                    </S.ContactItem>
                    <S.ContactItem>
                        <SiWhatsapp size={32} />
                        <a>+55 (91) 99127-8611</a>
                    </S.ContactItem>
                    <S.ContactItem>
                        <SiInstagram size={32} />
                        <a href="https://www.instagram.com/rubens.mkishimoto/" target="_blank" rel="noreferrer" >@rubens.mkishimoto</a>
                    </S.ContactItem>
                </S.Contact>

            </S.Content>

        </S.Container>
    )
}