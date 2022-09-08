---
Name: Sleep
Level: 1
CastingTime:  1 Action 
Range: 90 Feet
Area: Point
Components: Verbal, Somatic, Material, 
Duration:  Timed 1 minute
School: Enchantment
AttackSave: 
DamageEffect: 
Classes: Bard, Sorcerer, Wizard, 
SpellSource: PHB
Page: 276
---

>[!infobox|left]
># `=this.file.name`
>![[Enchantment.jpg|cover]]
> ###### Información Basica
> Type |  Stat |
> ---|---|
> Level | `=this.Level` |
> Casting Time | `=this.CastingTime` |
> Range | `=this.Range` |
> Area | `=this.Area` |
> Components | `=this.Components` |
> Duration | `=this.Duration` |
> School | `=this.School` |
> Attack/Save | `=this.AttackSave` |
> Damage/Effect | `=this.DamageEffect` |
> Classes | `=this.Classes` |

# `=this.file.name`
This spell sends creatures into a magical slumber. Roll {@dice 5d8}; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring {@condition unconscious} creatures).

Starting with the creature that has the lowest current hit points, each creature affected by this spell falls {@condition unconscious} until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature&#x27;s hit points from the total before moving on to the creature with the next lowest hit points. A creature&#x27;s hit points must be equal to or less than the remaining total for that creature to be affected.

Undead and creatures immune to being {@condition charmed} aren&#x27;t affected by this spell.



 


 


 


When you cast this spell using a spell slot of 2nd level or higher, roll an additional {@scaledice 5d8|1-9|2d8} for each slot level above 1st. 