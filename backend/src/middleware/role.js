export const checkRole = (rolesPermitidos) => {
  return (req, res, next) => {
    const user = req.user;

    if (!rolesPermitidos.includes(user.role)) {
      return res.status(403).json({
        message: "Acesso negado"
      });
    }

    next();
  };
};