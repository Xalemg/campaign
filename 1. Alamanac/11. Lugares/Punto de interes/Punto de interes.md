---

---
```dataviewjs
const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api 

dv.table(["Punto de interes", "ubicacion", "Tematica", "Peligro", "Economia", "defensas",  "Historia", "Descripción", "Mundo", "Usado en"], 
    await Promise.all( // await all modifiers to resolve their promise
        dv.pages('#punto_de_interes and "1. Alamanac/11. Lugares/Punto de interes"')
        .map(async p => [p.file.link, 
            await f(dv, p, "ubicacion"), 
            await f(dv, p, "tematica") ,
			await f(dv, p, "peligro"),
			await f(dv, p, "economia"),
			await f(dv, p, "defensas"),
			await f(dv, p, "historia"),
			await f(dv, p, "descripcion"),
			await f(dv, p, "Mundo"),
			await f(dv, p, "usado_en")
            ])
    )
)
```