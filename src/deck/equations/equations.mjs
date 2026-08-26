export const equations = [
  {
    id: "tsallis-entropy",
    title: "Entropia nao extensiva de Tsallis",
    sourceRefs: ["PRB 68, 014404 (2003), Eq. (1)"],
    tex: String.raw`S_q = k_B\,\frac{1-\sum_i p_i^q}{q-1}`,
  },
  {
    id: "tsallis-langevin-generalized",
    title: "Funcao de Langevin generalizada",
    sourceRefs: ["PRB 68, 014404 (2003), Eq. (7)"],
    tex: String.raw`\frac{M_q}{\mu}=L_q(x)=\frac{1}{2-q}\left[\coth_q(x)-\frac{1}{x}\right],\qquad x=\frac{\mu H}{k_BT}`,
  },
  {
    id: "tsallis-density-matrix",
    title: "Matriz densidade generalizada",
    sourceRefs: ["PRB 68, 014404 (2003), Eq. (3)"],
    tex: String.raw`\hat{\rho}=\frac{1}{Z_q}\left[1-(1-q)\tilde{\beta}\left(\hat{H}-U_q\right)\right]^{\!1/(1-q)}`,
  },
  {
    id: "tsallis-partition-function",
    title: "Funcao de particao generalizada",
    sourceRefs: ["PRB 68, 014404 (2003), Eq. (4)"],
    tex: String.raw`Z_q=\operatorname{Tr}\!\left[1-(1-q)\tilde{\beta}\left(\hat{H}-U_q\right)\right]^{\!1/(1-q)}`,
  },
  {
    id: "tsallis-gibbs-free-energy",
    title: "Energia livre de Gibbs",
    sourceRefs: ["PRB 68, 014404 (2003), Eq. (9)"],
    tex: String.raw`G=\frac{k_BT}{\mu}\int_0^{M_q}M_q^{-1}(M_q')\,dM_q'-HM_q-\frac{\lambda}{2}M_q^2`,
  },
  {
    id: "tsallis-transition-limits",
    title: "Limites de metaestabilidade",
    sourceRefs: ["PRB 68, 014404 (2003), Eqs. (10)-(11)"],
    tex: String.raw`t_{\mathrm{SH}}=\frac{3}{4(2-q)},\qquad t_{\mathrm{SC}}=q`,
  },
  {
    id: "tsallis-landau-coefficients",
    title: "Coeficientes de Landau generalizados",
    sourceRefs: ["PRB 68, 014404 (2003), Eqs. (26)-(29)"],
    tex: String.raw`\begin{aligned}
G&=\frac{A_q}{2}m^2+\frac{B_q}{4}m^4+\frac{C_q}{6}m^6-hm,
&\qquad A_q&=\frac{3}{q}(t-q),\\[5pt]
B_q&=\frac{9(-3+8q-4q^2)t}{5q^3},
&\qquad C_q&=\frac{27(54-318q+623q^2-464q^3+116q^4)t}{175q^5}
\end{aligned}`,
  },
  {
    id: "q-exponential",
    title: "Distribuicao q-exponencial",
    sourceRefs: ["MEM 4.1", "refs. [2-4]"],
    tex: String.raw`e_q(x)=\left[1+(1-q)x\right]^{1/(1-q)}, \qquad \lim_{q\to 1}e_q(x)=e^x`,
  },
  {
    id: "tsallis-magnetization",
    title: "Magnetizacao no formalismo q",
    sourceRefs: ["MEM 4.1", "refs. [3-8]"],
    tex: String.raw`M_q = N g\mu_B\,\left\langle S_z\right\rangle_q`,
  },
  {
    id: "mce-entropy",
    title: "Variacao isotermica de entropia magnetica",
    sourceRefs: ["MEM 4.2", "refs. [9-11]"],
    tex: String.raw`\Delta S_{\mathrm{mag}}(T,\Delta B)=\int_{B_i}^{B_f}\left(\frac{\partial M}{\partial T}\right)_B\,dB`,
  },
  {
    id: "mce-temperature",
    title: "Variacao adiabatica de temperatura",
    sourceRefs: ["MEM 4.2", "refs. [9-11]"],
    tex: String.raw`\Delta T_{\mathrm{ad}}(T,\Delta B)=-\int_{B_i}^{B_f}\frac{T}{C_{\mathrm{tot}}(T,B)}\left(\frac{\partial M}{\partial T}\right)_B\,dB`,
  },
  {
    id: "mce-entropy-process",
    title: "Processo isotermico e variacao de entropia magnetica",
    sourceRefs: ["MEM 4.2", "refs. [9-11]"],
    tex: String.raw`\left.\frac{\partial M}{\partial T}\right|_B
=\left.\frac{\partial S_{\mathrm{mag}}}{\partial B}\right|_T,
\qquad
\Delta S_{\mathrm{mag}}(T,\Delta B)
=\int_{B_i}^{B_f}\left.\frac{\partial M}{\partial T}\right|_B\,dB`,
  },
  {
    id: "mce-temperature-process",
    title: "Processo adiabatico e variacao de temperatura",
    sourceRefs: ["MEM 4.2", "refs. [9-11]"],
    tex: String.raw`dS_{\mathrm{tot}}
=\left.\frac{\partial S_{\mathrm{tot}}}{\partial T}\right|_B dT
+\left.\frac{\partial S_{\mathrm{tot}}}{\partial B}\right|_T dB,
\qquad
\Delta T_{\mathrm{ad}}(T,\Delta B)
=-\int_{B_i}^{B_f}\frac{T}{C_{\mathrm{tot}}}
\left.\frac{\partial M}{\partial T}\right|_B\,dB`,
  },
  {
    id: "heat-capacity-split",
    title: "Capacidade termica total",
    sourceRefs: ["MEM 4.2", "refs. [9-11]"],
    tex: String.raw`C_{\mathrm{tot}}(T,B)=C_{\mathrm{mag}}(T,B)+C_{\mathrm{lat}}(T)+C_{\mathrm{el}}(T)`,
  },
  {
    id: "spin-hamiltonian",
    title: "Hamiltoniano efetivo para complexos metalicos",
    sourceRefs: ["MEM 4.3", "refs. [24-36]"],
    tex: String.raw`\begin{aligned}
\mathcal{H} &= \mathcal{H}_{\mathrm{ex}}+\mathcal{H}_{\mathrm{ani}}+\mathcal{H}_{Z} \\
\mathcal{H}_{\mathrm{ex}} &= -\sum_{\langle i,j\rangle}J_{ij}\,\mathbf{S}_i\cdot\mathbf{S}_j \\
\mathcal{H}_{\mathrm{ani}} &= D\sum_i S_{i,z}^{\,2},\qquad
\mathcal{H}_{Z}=-\mu_B\sum_i g_i\,\mathbf{S}_i\cdot\mathbf{B}
\end{aligned}`,
  },
  {
    id: "partition-observables",
    title: "Do espectro aos observaveis magneticos",
    sourceRefs: ["MEM 4.3", "refs. [24-36]"],
    tex: String.raw`\begin{aligned}
Z &= \sum_n \exp\!\left(-\frac{E_n}{k_BT}\right),\qquad
F=-k_BT\ln Z \\
M &= -\left(\frac{\partial F}{\partial B}\right)_T,\qquad
\chi=\left(\frac{\partial M}{\partial B}\right)_T
\end{aligned}`,
  },
  {
    id: "cu5-hamiltonian",
    title: "Modelo dimero-trimero para Na2Cu5Si4O14",
    sourceRefs: ["MEM 4.3", "ref. [35]"],
    tex: String.raw`\begin{aligned}
\mathcal{H}={}&-J_1(\mathbf{S}_1\!\cdot\!\mathbf{S}_2+\mathbf{S}_2\!\cdot\!\mathbf{S}_3)
-J_2\,\mathbf{S}_A\!\cdot\!\mathbf{S}_B \\
&-J_3\,\mathbf{S}_4\!\cdot\!\mathbf{S}_5
-g\mu_B\,\mathbf{B}\!\cdot\!\mathbf{S}_{\mathrm{tot}}
\end{aligned}`,
  },
  {
    id: "cu5-parameters",
    title: "Parametros de troca do composto Na2Cu5Si4O14",
    sourceRefs: ["MEM 4.3", "ref. [35]"],
    tex: String.raw`J_1=-224.9\,\mathrm{K},\qquad J_3=40.22\,\mathrm{K},\qquad J_2=-8.01\,\mathrm{K},\qquad g=2.30`,
  },
  {
    id: "entanglement-witness",
    title: "Testemunha de emaranhamento",
    sourceRefs: ["MEM 4.4", "refs. [37-42]"],
    tex: String.raw`W(T)=\chi(T)-\chi_{\mathrm{sep}}(T),\qquad W(T)<0\Rightarrow\mathrm{estado\ emaranhado}`,
  },
  {
    id: "graphene-landau",
    title: "Escala de quantizacao em grafeno",
    sourceRefs: ["MEM 4.5", "refs. [43-51]"],
    tex: String.raw`m=\frac{N_0\Phi_0}{B},\qquad E_n=\operatorname{sgn}(n)\,v_F\sqrt{2e\hbar B\,|n|}`,
  },
  {
    id: "graphene-caloric",
    title: "Entropia oscilatoria em materiais relativisticos",
    sourceRefs: ["MEM 4.5", "refs. [43-51]"],
    tex: String.raw`\Delta S_{\mathrm{mag}}(B,T)\ \mathrm{oscila\ com}\ B\ \mathrm{por\ quantizacao\ de\ Landau}`,
  },
  {
    id: "quantum-battery",
    title: "Energia extraivel em bateria quantica",
    sourceRefs: ["MEM 4.6", "ref. [52]"],
    tex: String.raw`W_{\mathrm{ext}}=\operatorname{Tr}(\rho H)-\min_U\operatorname{Tr}(U\rho U^\dagger H)`,
  },
  {
    id: "quantum-caloric-potentials",
    title: "Potenciais caloricos quanticos",
    sourceRefs: ["MEM 4.6", "refs. [53-56]"],
    tex: String.raw`\begin{aligned}
\Delta S_{\mathrm{iso}} &=-\int_{\lambda_i}^{\lambda_f}\frac{d}{dT}\left\langle\frac{\partial\mathcal{H}}{\partial\lambda}\right\rangle d\lambda \\
\Delta T_{\mathrm{ad}} &=-k_BT^3\int_{\lambda_i}^{\lambda_f}
\frac{1}{\operatorname{var}(\mathcal{H})}
\frac{d}{dT}\left\langle\frac{\partial\mathcal{H}}{\partial\lambda}\right\rangle d\lambda
\end{aligned}`,
  },
];
