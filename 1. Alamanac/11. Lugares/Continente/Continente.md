```dataviewjs
const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api 

dv.table(["Contiente", "ubicacion", "Tematica", "Peligro", "Economia", "Comercio", "Religión", "Historia", "Descripción", "Mundo", "Usado en"], 
    await Promise.all( 
        dv.pages('#continente and "1. Alamanac/11. Lugares/Continente"')
        .map(async p => [p.file.link, 
            await f(dv, p, "ubicacion"), 
            await f(dv, p, "tematica") ,
			await f(dv, p, "peligro"),
			await f(dv, p, "economia"),
			await f(dv, p, "comercio"),
			await f(dv, p, "religion"),
			await f(dv, p, "historia"),
			await f(dv, p, "descripcion"),
			await f(dv, p, "Mundo"),
			await f(dv, p, "usado_en")
            ])
    )
)
```
