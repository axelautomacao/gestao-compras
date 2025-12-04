# 🚀 IMPLEMENTAÇÃO RÁPIDA - Execute Este Arquivo

## ⚠️ IMPORTANTE

Os arquivos JavaScript do projeto têm problemas de codificação que impedem edição automática.
Use este guia para implementação manual rápida.

---

## 📝 SPRINT 1: Fundação Financeira (PRIORIDADE MÁXIMA)

### Arquivo 1: `site/src/constants/costs.js`

**CRIAR NOVO ARQUIVO:**

```javascript
export const COST_PER_HOUR = 50;
export const COST_PER_OVERTIME_HOUR = 75;
export const EXTRA_FACTOR = 1.5;
export const STANDARD_HOURS_PER_DAY = 9;
```

---

### Arquivo 2: `site/src/modules/obras/obras.service.js`

**ADICIONAR NO FINAL DO ARQUIVO (antes do `}` final do export):**

```javascript
calculateFinancialSummary: async (obraId, compras = [], rdoData = null) => {
    const obra = await ObrasService.getObraById(obraId);
    if (!obra) return null;

    const COST_PER_HOUR = 50;
    const COST_PER_OVERTIME_HOUR = 75;

    // Materiais
    const materialsPlanned = Number(obra.valor_orcado) || 0;
    const materialsSpent = compras.reduce((sum, c) => sum + (Number(c.valor_total) || 0), 0);
    const materialsBalance = materialsPlanned - materialsSpent;
    const materialsPercent = materialsPlanned > 0 ? (materialsSpent / materialsPlanned) * 100 : 0;

    // Mão de Obra
    const horasNormaisPrevistas = Number(obra.horas_previstas) || 0;
    const horasExtrasPrevistas = Number(obra.horas_extras_previstas) || 0;
    const laborPlanned = (horasNormaisPrevistas * COST_PER_HOUR) + (horasExtrasPrevistas * COST_PER_OVERTIME_HOUR);

    let laborSpent = 0;
    let horasNormaisExecutadas = 0;
    let horasExtrasExecutadas = 0;

    if (rdoData && rdoData.reports) {
        const PADRAO_DIA = 9;
        rdoData.reports.forEach(rep => {
            let normalRep = 0;
            let extraRep = 0;

            (rep?.maoDeObra?.padrao || []).forEach(p => {
                const horas = Number(p.quantidade) || 0;
                const extra = Math.max(0, horas - PADRAO_DIA);
                normalRep += (horas - extra);
                extraRep += extra;
            });

            (rep?.maoDeObra?.personalizada || []).forEach(mo => {
                const horasStr = mo.horasTrabalhadas || '0';
                const horas = parseFloat(horasStr.toString().replace(',', '.')) || 0;
                const extra = Math.max(0, horas - PADRAO_DIA);
                normalRep += (horas - extra);
                extraRep += extra;
            });

            horasNormaisExecutadas += normalRep;
            horasExtrasExecutadas += extraRep;
        });

        laborSpent = (horasNormaisExecutadas * COST_PER_HOUR) + (horasExtrasExecutadas * COST_PER_OVERTIME_HOUR);
    }

    const laborBalance = laborPlanned - laborSpent;
    const laborPercent = laborPlanned > 0 ? (laborSpent / laborPlanned) * 100 : 0;

    // Totais
    const totalPlanned = materialsPlanned + laborPlanned;
    const totalSpent = materialsSpent + laborSpent;
    const totalBalance = totalPlanned - totalSpent;
    const totalPercent = totalPlanned > 0 ? (totalSpent / totalPlanned) * 100 : 0;

    // Horas Equivalentes
    const horasPrevistasEq = horasNormaisPrevistas + (horasExtrasPrevistas * 1.5);
    const horasExecutadasEq = horasNormaisExecutadas + (horasExtrasExecutadas * 1.5);
    const saldoHorasEq = horasPrevistasEq - horasExecutadasEq;
    const percentExtrasNormais = horasNormaisExecutadas > 0 ? (horasExtrasExecutadas / horasNormaisExecutadas) * 100 : 0;

    return {
        materialsPlanned,
        materialsSpent,
        materialsBalance,
        materialsPercent,
        laborPlanned,
        laborSpent,
        laborBalance,
        laborPercent,
        horasNormaisPrevistas,
        horasExtrasPrevistas,
        horasNormaisExecutadas,
        horasExtrasExecutadas,
        totalPlanned,
        totalSpent,
        totalBalance,
        totalPercent,
        economia: totalBalance,
        horasPrevistasEq,
        horasExecutadasEq,
        saldoHorasEq,
        percentExtrasNormais
    };
},
```

**MODIFICAR a função `getObraStats` - ADICIONAR no início:**

```javascript
const financialSummary = await ObrasService.calculateFinancialSummary(obraId, compras, rdoData);
```

**E no return de `getObraStats`, ADICIONAR:**

```javascript
...financialSummary,
aguardandoEntrega: compras.filter(c => c.status_compra !== 'Recebido' && c.status_compra !== 'Cancelado').length,
```

---

## ✅ TESTE RÁPIDO

Após implementar Sprint 1:

```bash
cd site
npm run dev
```

Abra o dashboard de uma obra e verifique se aparecem os novos KPIs financeiros.

---

## 📊 PRÓXIMOS SPRINTS

Após validar Sprint 1, continue com:
- Sprint 2: Ver SPRINT_2_IMPLEMENTACAO.md
- Sprint 3: Ver SPRINT_3_IMPLEMENTACAO.md
- Sprint 4: Ver SPRINT_4_IMPLEMENTACAO.md
- Sprint 5: Ver SPRINT_5_IMPLEMENTACAO.md
- Sprint 6: Ver SPRINT_6_IMPLEMENTACAO.md

---

## 🆘 PROBLEMAS?

Se tiver erros de sintaxe:
1. Verifique se copiou TODO o código
2. Verifique se não quebrou nenhuma chave `{}`
3. Verifique se a vírgula está correta antes da nova função

---

**COMECE PELO SPRINT 1 E TESTE ANTES DE CONTINUAR!**
