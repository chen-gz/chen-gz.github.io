
# CHAPTER 2

## AFFINE CONNECTIONS; RIEMANNIAN CONNECTIONS

### 1. Introduction

A fundamental event in the development of differential geometry was the introduction, in 1917, of the Levi-Civita parallelism (see Levi-Civita [LC]). For the case of surfaces in  $\mathbf{R}^3$ , an equivalent idea can be described in the following manner. Let  $S \subset \mathbf{R}^3$  be a surface and let  $c: I \to S$  be a parametrized curve in  $S$ , with  $V: I \to \mathbf{R}^3$  a vector field along  $c$  tangent to  $S$ . The vector  $\frac{dV}{dt}(t)$ ,  $t \in I$ , does not in general belong to the tangent plane of  $S$ ,  $T_{c(t)}S$ . The concept of differentiating a vector field is not therefore an "intrinsic" geometric notion on  $S$ . To remedy this state of affairs we consider, instead of the usual derivative  $\frac{dV}{dt}(t)$ , the orthogonal projection of  $\frac{dV}{dt}(t)$  on  $T_{c(t)}S$ . This orthogonally projected vector we call the covariant derivative and denote it by  $\frac{DV}{dt}(t)$ . The covariant derivative of  $V$  is the derivative of  $V$  as seen from the "viewpoint of  $S$ ".

A basic point is that the covariant derivative depends only on the first fundamental form of  $S$  and is therefore a concept which can be considered within Riemannian geometry. In particular, the notion of covariant derivative permits us to take the derivative of the velocity vector of  $c$ , which gives the acceleration of the curve  $c$  in  $S$ . It is possible to show that curves with zero acceleration are precisely the geodesics of  $S$  and that the Gaussian curvature of  $S$  can be expressed in terms of the notion of the covariant derivative.

We say that a vector field  $V$  along  $c$  is parallel if  $\frac{DV}{dt} \equiv 0$ . Conversely, starting from the notion of parallelism it is possible to recover the notion of covariant derivative (Cf. Exercise 1 of this chapter). These notions are then equivalent to each other.

Although nowadays it is preferable to start from the notion of covariant derivative, historically the idea of parallelism came first. For surfaces in  $\mathbf{R}^3$ , parallelism can be introduced in the following

manner. Consider a family of planes tangent to  $S$  along the curve  $c$ . This family determines a surface  $E$ , enveloping these tangent planes, which possesses the property that it will be tangent to  $S$  along the curve  $c$  and whose Gaussian curvature  $K \equiv 0$ . (Cf. M. do Carmo [dC 2] pp. 195–197). It is not difficult to show that the parallelism along  $c$ , defined through the vanishing of the covariant derivative is the same whether considered relative to  $S$  or relative to  $E$ . On the other hand, surfaces of zero curvature can be shown to be locally isometric to a plane. Since parallelism is invariant by isometry, we can perform it “euclideanly” in the isometric image of  $E$  and then bring it back to  $S$ . This was the construction used classically to define parallelism. (M. do Carmo [dC 2] p. 244). It will turn out that it is preferable, technically, to work with the covariant derivative.

The notion of covariant derivative has many important consequences. It makes it clear that the two basic ideas of geodesic and curvature can be defined in more general situations than that of Riemannian manifolds. To this end it suffices that one be able to define a notion of derivation of vector fields with certain properties (which nowadays we call an affine connection, Cf. Definition 2.1 of this chapter). This has stimulated the creation of many different “geometric structures” (on differentiable manifolds) more general than Riemannian geometry. In the same way as metric Euclidean geometry is a particular case of affine geometry and more generally of projective geometry, Riemannian geometry is a particular case of more general geometric structures.

We are not going to enter into the details of these developments. Our interest in affine connections rests in the fact (Cf. Theorem 3.6 of this chapter) that a choice of a Riemannian metric on a manifold  $M$  uniquely determines a certain affine connection on  $M$ . We are then able, in this fashion, to differentiate vector fields on  $M$ .

### 2. Affine Connections

Let us indicate by  $\mathcal{X}(M)$  the set of all vector fields of class  $C^\infty$  on  $M$  and by  $\mathcal{D}(M)$  the ring of real-valued functions of class  $C^\infty$  defined on  $M$ .

2.1 DEFINITION. An *affine connection*  $\nabla$  on a differentiable manifold  $M$  is a mapping

$$\nabla: \mathcal{X}(M) \times \mathcal{X}(M) \to \mathcal{X}(M)$$

which is denoted by  $(X, Y) \xrightarrow{\nabla} \nabla_X Y$  and which satisfies the following properties :

1. $\nabla_{fX+gY} Z = f\nabla_X Z + g\nabla_Y Z$ .
2. $\nabla_X(Y+Z) = \nabla_X Y + \nabla_X Z$ .
3. $\nabla_X(fY) = f\nabla_X Y + X(f)Y$ ,

in which  $X, Y, Z \in \mathcal{X}(M)$  and  $f, g \in \mathcal{D}(M)$ .

This definition is not as transparent as that of Riemannian structure. The following proposition, nevertheless, should clarify the situation a little.

2.2 PROPOSITION. Let  $M$  be a differentiable manifold with an affine connection  $\nabla$ . There exists a unique correspondence which associates to a vector field  $V$  along the differentiable curve  $c: I \to M$  another vector field  $\frac{DV}{dt}$  along  $c$ , called the covariant derivative of  $V$  along  $c$ , such that:

1. $\frac{D}{dt}(V+W) = \frac{DV}{dt} + \frac{DW}{dt}$ .
2. $\frac{D}{dt}(fV) = \frac{df}{dt}V + f\frac{DV}{dt}$ , where  $W$  is a vector field along  $c$  and  $f$  is a differentiable function on  $I$ .
3. If  $V$  is induced by a vector field  $Y \in \mathcal{X}(M)$ , i.e.,  $V(t) = Y(c(t))$ , then  $\frac{DV}{dt} = \nabla_{dc/dt} Y$ .

2.3 REMARK. The last line of (c) makes sense, since  $\nabla_X Y(p)$  depends on the value of  $X(p)$  and the value  $Y$  along a curve, tangent to  $X$  at  $p$ . In effect, part (iii) of Definition 2.1 allows us to show that the notion of affine connection is actually a local notion (cf. Rem. 5.7 of Chap. 0). Choosing a system of coordinates  $(x_1, \dots, x_n)$  about  $p$  and writing

$$X = \sum_i x_i X_i, \quad Y = \sum_j y_j X_j,$$

where  $X_i = \frac{\partial}{\partial x_i}$ , we have

$$\nabla_X Y = \sum_i x_i \nabla_{X_i} \left( \sum_j y_j X_j \right) = \sum_{ij} x_i y_j \nabla_{X_i} X_j + \sum_{ij} x_i X_i(y_j) X_j.$$
