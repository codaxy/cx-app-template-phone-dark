import {Link, Icon} from "cx/widgets";

const NavLink = ({ icon, text, href }) => <cx>
    <Link href={href} mod="footer" url-bind="url">
        <Icon name={icon} />
        <div>{text}</div>
    </Link>
</cx>

export default <cx>
    <NavLink icon="fa-home" text="Home" href="~/" />
    <NavLink icon="fa-chart-line" text="Prices" href="~/prices" />
    <NavLink icon="fa-calendar-alt" text="Calendar" href="~/calendar" />
    <NavLink icon="fa-address-book" text="Contacts" href="~/contacts" />
    <NavLink icon="fa-comments" text="Comments" href="~/comments" />
</cx>