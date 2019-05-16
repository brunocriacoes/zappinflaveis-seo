"use strict";

$("#menu_site")
.data( site.paginas )
.getTpl("#tpl_menu_site")
.draw()

$("#links_top")
.data( site.linksTop )
.getTpl("#tpl_link_top")
.draw()

$("#links_contatos")
.data( site.links )
.getTpl("#tpl_link_contato")
.draw()

$("#endereco_redape")
.data( site.endereco )
.getTpl("#tpl_endereco")
.draw()