import { Link } from "react-router-dom";

export default function NavLink({ page, to, isActive }) {

    return (
        <Link to={to} className={`${isActive && 'border-b-[1px]'} text-lg transition-all hover:border-b-[1px] border-b-white`}>
            <li>{page}</li>
        </Link>
    );
}
