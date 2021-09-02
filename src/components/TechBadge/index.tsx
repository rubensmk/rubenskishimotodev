import Image from "next/image";
import { ITech } from "../ProjectCard";
import { Container } from './styles';

interface TechBadgeProps {
    data: ITech;
}

export function TechBadge({ data }: TechBadgeProps) {
    return (
        <Container color={data.color} text_color={data.text_color}>
            <Image src={data.icon} width="28" height="28" alt="tech" />
            <p>{data.name}</p>
        </Container>
    );
}