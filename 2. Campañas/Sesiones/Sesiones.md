
---
banner: "![[Preparacion.png]]"
banner_x: 0.51761
banner_y: 0.87
---
```dataviewjs
for (let group of dv.pages("#sesion").groupBy(p => p.Campaña)) {
		dv.header(1, group.key);
	dv.table(["Sesiones", "Numero"],
		group.rows
			.sort(k => k.Numero, 'desc')
			.map(k => ["[[" + k.file.name + "]]", k.Numero]))
}
```
