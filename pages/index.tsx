import Link from "next/link";

import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";

export default () => (
    <div>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>Hello World</Toolbar>
        </AppBar>

        <Link href="/about">about</Link>
    </div>
);
