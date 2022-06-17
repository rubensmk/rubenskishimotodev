/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ITech } from "../ProjectCard";
import { Container } from './styles';

interface TechBadgeProps {
    data: ITech;
}

const techBadgeColor = {
    "ReactJS": ["#F7F6F2","#48CEF6"],
    "React Native": ["#212121","#f5f5f5"],
    "NodeJS": ["#3d3d3d","#FFFFFF"],
    "Docker": ["#49F7A3","#423F3E"],
    "PostgreSQL": ["#243036","#48CEF6"],
}

export function TechBadge({ data }: TechBadgeProps) {
    return (
        <Container color={techBadgeColor[data?.techName][0]} text_color={techBadgeColor[data?.techName][1]}>
            <Image src={data?.techIconUrl} width="28" height="28" alt="tech" />
            <p>{data?.techName}</p>
        </Container>
    );
}