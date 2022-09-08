---

---
```dataviewjs
const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api 

dv.table(["Ciudad", "ubicacion", "Tematica", "Peligro", "Monstruos", "Clima", "Religión", "Historia", "Descripción", "Mundo", "Usado en"], 
    await Promise.all( // await all modifiers to resolve their promise
        dv.pages('#mazmorra and "1. Alamanac/11. Lugares/Mazmorra"')
        .map(async p => [p.file.link, 
            await f(dv, p, "ubicacion"), 
            await f(dv, p, "tematica") ,
			await f(dv, p, "peligro"),
			await f(dv, p, "monstruos"),
			await f(dv, p, "clima"),
			await f(dv, p, "religion"),
			await f(dv, p, "historia"),
			await f(dv, p, "descripcion"),
			await f(dv, p, "Mundo"),
			await f(dv, p, "usado_en")
            ])
    )
)
```