---
type: docs
title: "§ 6. Four-vectors"
weight: 6
---


The coordinates of an event  $(ct, x, y, z)$  can be considered as the components of a four-dimensional radius vector (or, for short, a four-radius vector) in a four-dimensional space. We shall denote its components by  $x^i$ , where the index  $i$  takes on the values 0, 1, 2, 3, and

$$x^0 = ct, \quad x^1 = x, \quad x^2 = y, \quad x^3 = z.$$

The square of the “length” of the radius four-vector is given by

$$(x^0)^2 - (x^1)^2 - (x^2)^2 - (x^3)^2.$$

It does not change under any rotations of the four-dimensional coordinate system, in particular under Lorentz transformations.

In general a set of four quantities  $A^0, A^1, A^2, A^3$  which transform like the components of the radius four-vector  $x^i$  under transformations of the four-dimensional coordinate system is called a *four-dimensional vector (four-vector)*  $A^i$ . Under Lorentz transformations,

$$A^0 = \frac{A'^0 + \frac{V}{c}A'^1}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad A^1 = \frac{A'^1 + \frac{V}{c}A'^0}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad A^2 = A'^2, \quad A^3 = A'^3. \quad (6.1)$$

The square magnitude of any four-vector is defined analogously to the square of the radius four-vector:

$$(A^0)^2 - (A^1)^2 - (A^2)^2 - (A^3)^2.$$

For convenience of notation, we introduce two "types" of components of four-vectors, denoting them by the symbols  $A^i$  and  $A_i$ , with superscripts and subscripts. These are related by

$$A_0 = A^0, \quad A_1 = -A^1, \quad A_2 = -A^2, \quad A_3 = -A^3. \quad (6.2)$$

The square of the four-vector then appears in the form

$$\sum_{i=0}^{3} A^i A_i = A^0 A_0 + A^1 A_1 + A^2 A_2 + A^3 A_3.$$

Such sums are customarily written simply as  $A^i A_i$ , omitting the summation sign. One agrees that one sums over any repeated index, and omits the summation sign. Of the pair of indices, one must be a superscript and the other a subscript. This convention for summation over "dummy" indices is very convenient and considerably simplifies the writing of formulas.

We shall use Latin letters  $i, k, l, \dots$ , for four-dimensional indices, taking on the values 0, 1, 2, 3.

In analogy to the square of a four-vector, one forms the *scalar product* of two different four-vectors:

$$A^i B_i = A^0 B_0 + A^1 B_1 + A^2 B_2 + A^3 B_3.$$

It is clear that this can be written either as  $A^i B_i$  or  $A_i B^i$ —the result is the same. In general one can switch upper and lower indices in any pair of dummy indices.†

The product  $A^i B_i$  is a *four-scalar*—it is invariant under rotations of the four-dimensional coordinate system. This is easily verified directly,‡ but it is also apparent beforehand (from the analogy with the square  $A^i A_i$ ) from the fact that all four-vectors transform according to the same rule.

† In the literature the indices are often omitted on four-vectors, and their squares and scalar products are written as  $A^2$ ,  $AB$ . We shall not use this notation in the present text.

‡ One should remember that the law for transformation of a four-vector expressed in covariant components differs (in signs) from the same law expressed for contravariant components. Thus, instead of (6.1), one will have:

$$A_0 = \frac{A'_0 - \frac{V}{c}A'_1}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad A_1 = \frac{A'_1 - \frac{V}{c}A'_0}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad A_2 = A'_2, \quad A_3 = A'_3.$$

The component  $A^0$  is called the *time component*, and  $A^1, A^2, A^3$  the *space components* of the four-vector (in analogy to the radius four-vector). The square of a four-vector can be positive, negative, or zero; such vectors are called, *timelike*, *spacelike*, and *null-vectors*, respectively (again in analogy to the terminology for intervals).†

Under purely spatial rotations (i.e. transformations not affecting the time axis) the three space components of the four-vector  $A^i$  form a three-dimensional vector  $A$ . The time component of the four-vector is a three-dimensional scalar (with respect to these transformations). In enumerating the components of a four-vector, we shall often write them as

$$A^i = (A^0, A).$$

The covariant components of the same four-vector are  $A_i = (A^0, -A)$ , and the square of the four-vector is  $A^i A_i = (A^0)^2 - A^2$ . Thus, for the radius four-vector:

$$x^i = (ct, r), ext{ } x_i = (ct, -r), ext{ } x^i x_i = c^2 t^2 - r^2.$$

For three-dimensional vectors (with coordinates  $x, y, z$ ) there is no need to distinguish between contra- and covariant components. Whenever this can be done without causing confusion, we shall write their components as  $A_\alpha$  ( $\alpha = x, y, z$ ) using Greek letters for subscripts. In particular we shall assume a summation over  $x, y, z$  for any repeated index (for example,  $A \cdot B = A_\alpha B_\alpha$ ).

A *four-dimensional tensor* (*four-tensor*) of the second rank is a set of sixteen quantities  $A^{ik}$ , which under coordinate transformations transform like the products of components of two four-vectors. We similarly define four-tensors of higher rank.

The components of a second-rank tensor can be written in three forms: covariant,  $A_{ik}$ , contravariant,  $A^{ik}$ , and mixed,  $A^i_k$  (where, in the last case, one should distinguish between  $A^i_k$  and  $A^k_i$ , i.e. one should be careful about which of the two is superscript and which a subscript). The connection between the different types of components is determined from the general rule: raising or lowering a space index (1, 2, 3) changes the sign of the component, while raising or lowering the time index (0) does not. Thus:

$$A_{00} = A^{00}, ext{ } A_{01} = -A^{01}, ext{ } A_{11} = A^{11}, ext{ } \dots, ext{ } A_0^0 = A^{00}, ext{ } A_0^1 = A^{01}, ext{ } A_1^0 = -A^{01}, ext{ } A_1^1 = -A^{11}, ext{ } \dots$$

Under purely spatial transformations, the nine quantities  $A^{11}, A^{12}, \dots$  form a three-tensor. The three components  $A^{01}, A^{02}, A^{03}$  and the three components  $A^{10}, A^{20}, A^{30}$  constitute three-dimensional vectors, while the component  $A^{00}$  is a three-dimensional scalar.

A tensor  $A^{ik}$  is said to be *symmetric* if  $A^{ik} = A^{ki}$ , and *antisymmetric* if  $A^{ik} = -A^{ki}$ . In an antisymmetric tensor, all the diagonal components (i.e. the components  $A^{00}, A^{11}, \dots$ ) are zero, since, for example, we must have  $A^{00} = -A^{00}$ . For a symmetric tensor  $A^{ik}$ , the mixed components  $A^i_k$  and  $A^k_i$  obviously coincide; in such cases we shall simply write  $A^i_k$ , putting the indices one above the other.

In every tensor equation, the two sides must contain identical and identically placed (i.e. above or below) free indices (as distinguished from dummy indices). The free indices in tensor equations can be shifted up or down, but this must be done simultaneously in all terms in the equation. Equating covariant and contravariant components of different tensors is "illegal"; such an equation, even if it happened by chance to be valid in a particular reference system, would be violated on going to another frame.

† Null vectors are also said to be *isotropic*.

From the tensor components  $A^{ik}$  one can form a scalar by taking the sum

$$A^i_i = A^0_0 + A^1_1 + A^2_2 + A^3_3$$

(where, of course,  $A^i_i = A^i_i$ ). This sum is called the *trace* of the tensor, and the operation for obtaining it is called *contraction*.

The formation of the scalar product of two vectors, considered earlier, is a contraction operation: it is the formation of the scalar  $A^i B_i$  from the tensor  $A^i B_k$ . In general, contracting on any pair of indices reduces the rank of the tensor by 2. For example,  $A^i_{kl}$  is a tensor of second rank  $A^i_k B^k$  is a four-vector,  $A^{ik}$  is a scalar, etc.

The unit four-tensor  $\delta^i_k$  satisfies the condition that for any four-vector  $A^i$ ,

$$\delta^k_i A^i = A^k. \quad (6.3)$$

It is clear that the components of this tensor are

$$\delta^k_i = \begin{cases} 1, & \text{if } i = k \\ 0, & \text{if } i \neq k \end{cases} \quad (6.4)$$

Its trace is  $\delta^i_i = 4$ .

By raising the one index or lowering the other in  $\delta^k_i$ , we can obtain the contravariant tensor  $g^{ik}$  or  $g_{ik}$ , which is called the *metric tensor*. The tensors  $g^{ik}$  and  $g_{ik}$  have identical components, which can be written as a matrix:

$$(g^{ik}) = (g_{ik}) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix} \quad (6.5)$$

(the index  $i$  labels the rows, and  $k$  the columns, in the order 0, 1, 2, 3). It is clear that

$$g_{ik} A^k = A_i, \quad g^{ik} A_k = A^i. \quad (6.6)$$

The scalar product of two four-vectors can therefore be written in the form:

$$A^i A_i = g_{ik} A^i A^k = g^{ik} A_i A_k. \quad (6.7)$$

The tensors  $\delta^i_k$ ,  $g_{ik}$ ,  $g^{ik}$  are special in the sense that their components are the same in all coordinate systems. The *completely antisymmetric unit tensor* of fourth rank,  $e^{iklm}$ , has the same property. This is the tensor whose components change sign under interchange of any pair of indices, and whose nonzero components are  $\pm 1$ . From the antisymmetry it follows that all components in which two indices are the same are zero, so that the only non-vanishing components are those for which all four indices are different. We set

$$e^{0123} = +1 \quad (6.8)$$

(hence  $e_{0123} = -1$ ). Then all the other nonvanishing components  $e^{iklm}$  are equal to  $+1$  or  $-1$ , according as the numbers  $i, k, l, m$  can be brought to the arrangement 0, 1, 2, 3 by an even or an odd number of transpositions. The number of such components is  $4! = 24$ . Thus,

$$e^{iklm} e_{iklm} = -24. \quad (6.9)$$

With respect to rotations of the coordinate system, the quantities  $e^{iklm}$  behave like the components of a tensor; but if we change the sign of one or three of the coordinates the components  $e^{iklm}$ , being defined as the same in all coordinate systems, do not change, whereas some of the components of a tensor should change sign. Thus  $e^{iklm}$  is, strictly speaking, not a tensor, but rather a pseudotensor. Pseudotensors of any rank, in particular pseudoscalars, behave like tensors under all coordinate transformations except those that cannot be reduced to rotations, i.e. reflections, which are changes in sign of the coordinates that are not reducible to a rotation.

The products  $e^{iklm} e^{prst}$  form a four-tensor of rank 8, which is a true tensor; by contracting on one or more pairs of indices, one obtains tensors of rank 6, 4, and 2. All these tensors have the same form in all coordinate systems. Thus their components must be expressed as combinations of products of components of the unit tensor  $\delta_k^i$  — the only true tensor whose components are the same in all coordinate systems. These combinations can easily be found by starting from the symmetries that they must possess under permutation of indices.†

If  $A^{ik}$  is an antisymmetric tensor, the tensor  $A^{ik}$  and the pseudotensor  $A^{*ik} = \frac{1}{2} e^{iklm} A_{lm}$  are said to be dual to one another. Similarly,  $e^{iklm} A_m$  is an antisymmetric pseudotensor of rank 3, dual to the vector  $A^i$ . The product  $A^{ik} A_{ik}^*$  of dual tensors is obviously a pseudoscalar.

In this connection we note some analogous properties of three-dimensional vectors and tensors. The completely antisymmetric unit pseudotensor of rank 3 is the set of quantities  $e_{\alpha\beta\gamma}$  which change sign under any transposition of a pair of indices. The only nonvanishing components of  $e_{\alpha\beta\gamma}$  are those with three different indices. We set  $e_{xyz} = 1$ ; the others are 1 or -1, depending on whether the sequence  $\alpha, \beta, \gamma$  can be brought to the order  $x, y, z$  by an even or an odd number of transpositions.‡

† For reference we give the following formulas:

$$e^{iklm} e_{prst} = - \begin{vmatrix} \delta_p^i & \delta_r^i & \delta_s^i & \delta_t^i \\ \delta_p^k & \delta_r^k & \delta_s^k & \delta_t^k \\ \delta_p^l & \delta_r^l & \delta_s^l & \delta_t^l \\ \delta_p^m & \delta_r^m & \delta_s^m & \delta_t^m \end{vmatrix}, \quad e^{iklm} e_{prsm} = - \begin{vmatrix} \delta_p^i & \delta_r^i & \delta_s^i & \delta_t^i \\ \delta_p^k & \delta_r^k & \delta_s^k & \delta_t^k \\ \delta_p^l & \delta_r^l & \delta_s^l & \delta_t^l \\ \delta_p^m & \delta_r^m & \delta_s^m & \delta_t^m \end{vmatrix}$$

$$e^{iklm} e_{prlm} = -2(\delta_p^i \delta_r^k - \delta_r^i \delta_p^k),$$

$$e^{iklm} e_{prlm} = -6\delta_p^i.$$

The overall coefficient in these formulas can be checked using the result of a complete contraction, which should give (6.9).

As a consequence of these formulas we have:

$$e^{prst} A_{ip} A_{kr} A_{ls} A_{mt} = -A e_{iklm}.$$

$$e^{iklm} e^{prst} A_{ip} A_{kr} A_{ls} A_{mt} = 24A.$$

where  $A$  is the determinant formed from the quantities  $A_{ik}$ .

‡ The fact that the components of the four-tensor  $e^{iklm}$  are unchanged under rotations of the four-dimensional coordinate system, and that the components of the three-tensor  $e_{\alpha\beta\gamma}$  are unchanged by rotations of the space axes are special cases of a general rule: any completely antisymmetric tensor of rank equal to the number of dimensions of the space in which it is defined is invariant under rotations of the coordinate system in the space.

The products  $e_{\alpha\beta\gamma}e_{\lambda\mu\nu}$  form a true three-dimensional tensor of rank 6, and are therefore expressible as combinations of products of components of the unit three-tensor  $\delta_{\alpha\beta}$ .†

Under a reflection of the coordinate system, i.e. under a change in sign of all the coordinates, the components of an ordinary vector also change sign. Such vectors are said to be *polar*. The components of a vector that can be written as the cross product of two polar vectors do not change sign under inversion. Such vectors are said to be *axial*. The scalar product of a polar and an axial vector is not a true scalar, but rather a pseudoscalar; it changes sign under a coordinate inversion. An axial vector is a pseudovector, dual to some antisymmetric tensor. Thus, if  $C = A \times B$ , then

$$C_{\alpha} = \frac{1}{2} e_{\alpha\beta\gamma} C_{\beta\gamma}, \quad \text{where} \quad C_{\beta\gamma} = A_{\beta} B_{\gamma} - A_{\gamma} B_{\beta}.$$

Now consider four-tensors. The space components ( $i, k, = 1, 2, 3$ ) of the antisymmetric tensor  $A^{ik}$  form a three-dimensional antisymmetric tensor with respect to purely spatial transformations; according to our statement its components can be expressed in terms of the components of a three-dimensional axial vector. With respect to these same transformations the components  $A^{01}, A^{02}, A^{03}$  form a three-dimensional polar vector. Thus the components of an antisymmetric four-tensor can be written as a matrix:

$$(A^{ik}) = \begin{vmatrix} 0 & p_x & p_y & p_z \\ -p_x & 0 & -a_z & a_y \\ -p_y & a_z & 0 & -a_x \\ -p_z & -a_y & a_x & 0 \end{vmatrix}, \quad (6.10)$$

where, with respect to spatial transformations,  $p$  and  $a$  are polar and axial vectors, respectively. In enumerating the components of an antisymmetric four-tensor, we shall write them in the form

$$A^{ik} = (p, a);$$

then the covariant components of the same tensor are

$$A_{ik} = (-p, a).$$

Finally we consider certain differential and integral operations of four-dimensional tensor analysis.

The four-gradient of a scalar  $\phi$  is the four-vector

† For reference, we give the appropriate formulas:

$$e_{\alpha\beta\gamma}e_{\lambda\mu\nu} = \begin{vmatrix} \delta_{\alpha\lambda} & \delta_{\alpha\mu} & \delta_{\alpha\nu} \\ \delta_{\beta\lambda} & \delta_{\beta\mu} & \delta_{\beta\nu} \\ \delta_{\gamma\lambda} & \delta_{\gamma\mu} & \delta_{\gamma\nu} \end{vmatrix}.$$

Contracting this tensor on one, two and three pairs of indices, we get:

$$e_{\alpha\beta\gamma}e_{\lambda\mu\gamma} = \delta_{\alpha\lambda}\delta_{\beta\mu} - \delta_{\alpha\mu}\delta_{\beta\lambda},$$

$$e_{\alpha\beta\gamma}e_{\lambda\beta\gamma} = 2\delta_{\alpha\lambda},$$

$$e_{\alpha\beta\gamma}e_{\alpha\beta\gamma} = 6.$$

$$\frac{\partial \phi}{\partial x^i} = \left( \frac{1}{c} \frac{\partial \phi}{\partial t}, \nabla \phi \right).$$

We must remember that these derivatives are to be regarded as the covariant components of the four-vector. In fact, the differential of the scalar

$$d\phi = \frac{\partial \phi}{\partial x^i} dx^i$$

is also a scalar; from its form (scalar product of two four-vectors) our assertion is obvious.

In general, the operators of differentiation with respect to the coordinates  $x^i$ ,  $\partial/\partial x^i$ , should be regarded as the covariant components of the operator four-vector. Thus, for example, the divergence of a four-vector, the expression  $\partial A^i/\partial x^i$ , in which we differentiate the contravariant components  $A^i$ , is a scalar.†

In three-dimensional space one can extend integrals over a volume, a surface or a curve. In four-dimensional space there are four types of integrations:

(1) Integral over a curve in four-space. The element of integration is the line element, i.e. the four-vector  $dx^i$ .

(2) Integral over a (two-dimensional) surface in four-space. As we know, in three-space the projections of the area of the parallelogram formed from the vectors  $d\mathbf{r}$  and  $d\mathbf{r}'$  on the coordinate planes  $x_\alpha x_\beta$  are  $dx_\alpha dx'_\beta - dx_\beta dx'_\alpha$ . Analogously, in four-space the infinitesimal element of surface is given by the antisymmetric tensor of second rank  $df^{ik} = dx^i dx'^k - dx^k dx'^i$ ; its components are the projections of the element of area on the coordinate planes. In three-dimensional space, as we know, one uses as surface element in place of the tensor  $df_{\alpha\beta}$  the vector  $df_\alpha$  dual to the tensor  $df_{\alpha\beta}$ :  $df_\alpha = \frac{1}{2} e_{\alpha\beta\gamma} df_{\beta\gamma}$ . Geometrically this is a vector normal to the surface element and equal in absolute magnitude to the area of the element. In four-space we cannot construct such a vector, but we can construct the tensor  $df^{*ik}$  dual to the tensor  $df^{ik}$ ,

$$df^{*ik} = \frac{1}{2} e^{iklm} df_{lm}. \quad (6.11)$$

Geometrically it describes an element of surface equal to and “normal” to the element of

† If we differentiate with respect to the “covariant coordinates”  $x_i$ , then the derivatives

$$\frac{\partial \phi}{\partial x_i} = \left( \frac{1}{c} \frac{\partial \phi}{\partial t}, -\nabla \phi \right)$$

form the contravariant components of a four-vector. We shall use this form only in exceptional cases [for example, for writing the square of the four-gradient  $(\partial\phi/\partial x^i)(\partial\phi/\partial x_i)$ ].

We note that in the literature partial derivatives with respect to the coordinates are often abbreviated using the symbols.

$$\partial^i = \frac{\partial}{\partial x_i}, \quad \partial_i = \frac{\partial}{\partial x^i}.$$

In this form of writing of the differentiation operators, the co- or contravariant character of quantities formed with them is explicit. This same advantage exists for another abbreviated form for writing derivatives, using the index preceded by a comma:

$$\phi_i = \frac{\partial \phi}{\partial x^i}, \quad \phi^i = \frac{\partial \phi}{\partial x_i}.$$