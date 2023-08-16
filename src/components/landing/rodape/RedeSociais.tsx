import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/aristofaneslira" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/aristofanes-lira-36072714a/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/aristofaneslira" />
        </div>
    )
}