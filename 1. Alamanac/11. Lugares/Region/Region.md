---

---
```dataviewjs
const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api 

dv.table(["Region", "ubicacion", "Tematica", "Peligro", "Economia", "Comercion", "Clima", "Ecologia",  "Historia", "Descripción", "Mundo", "Usado en"], 
    await Promise.all( // await all modifiers to resolve their promise
        dv.pages('#region and "1. Alamanac/11. Lugares/Region"')
        .map(async p => [p.file.link, 
            await f(dv, p, "ubicacion"), 
            await f(dv, p, "tematica") ,
			await f(dv, p, "peligro"),
			await f(dv, p, "economia"),
			await f(dv, p, "comercio"),
			await f(dv, p, "clima"),
			await f(dv, p, "ecologia"),
			await f(dv, p, "historia"),
			await f(dv, p, "descripcion"),
			await f(dv, p, "Mundo"),
			await f(dv, p, "usado_en")
            ])
    )
)
```