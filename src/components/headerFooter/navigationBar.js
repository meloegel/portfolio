import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function NavigationBar() {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
            <a href="#aboutDiv">
                <Typography color="white"> About <i class="fas fa-scroll" /></Typography></a>
            <a href="#proExpo">
                <Typography color="white"> Professional Experience <i class="fas fa-user-tie" /></Typography></a>
            <a href="#projects">
                <Typography color="white"> Projects <i class="fas fa-folder-open" /></Typography></a>
            <a href="#skills">
                <Typography color="white"> Skills <i class="fas fa-medal" /></Typography></a>
            <a href="#edu" className="no-underline">
                <Typography color="white"> Education <i class="fas fa-laptop-code" /></Typography></a>
            <a href="#contactDiv">
                <Typography color="white"> Contact <i class="fas fa-id-card" /></Typography></a>
        </Breadcrumbs>
    )
}