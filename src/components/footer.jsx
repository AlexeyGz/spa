function Footer() {
    return <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Гужавин Алексей
            <a className="grey-text text-lighten-4 right" href="https://github.com/AlexeyGz/spa">Репозиторий</a>
            </div>
        </div>
        </footer>
}
export { Footer };